import React, { useState } from 'react';
import Title from '../../Shared/Title';
import { Input, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5'; 
import candidate from "../../assets/candidate.png"
import { FaRegEye } from 'react-icons/fa';
import AddCandidateModal from '../../Components/AddCandidateModal';
import ShowCandidateDetails from '../../Components/ShowCandidateDetails';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteCandidateMutation, useGetCandidateQuery } from '../../redux/apiSlices/DashboardSlice';
import { imageUrl } from '../../redux/api/apislice';
import Swal from 'sweetalert2';
 


const AddCandidate = () => { 
    const [open , setOpen] = useState(false)  
    const [showDetails , setShowDetails]= useState(false)
    const [modalData , setModalData] = useState(null)   
    const [searchValue , setSearchValue]= useState("") 
    const {data:candidate , refetch} = useGetCandidateQuery(searchValue)   
    const [page ,setPage]=useState(1)
    const [deleteCandidate] = useDeleteCandidateMutation()
    console.log(candidate); 

    const data = candidate?.data?.map((value , index)=>({
      key:index+1  ,  
      id: value?._id ,
      candidate:{
name:value?.name ,
img: value?.image.startsWith("https")? value?.image : `${imageUrl}${value?.image}`
      }  ,
    party:value?.politicalAffiliation , 
    state: value?.state ,
    election: value?.election ,
    color: value?.color ,
    issues:value?.issues
    }))  

    const handleSearch =(e)=>{
      const data = e?.target?.value  
      setSearchValue(data)
    }
     
    const handleDelete =async(id)=>{
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteCandidate(id).then((res) => {
            if (res?.data?.success) {
              Swal.fire({
                text: res?.data?.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                refetch();
              });
            } else {
              Swal.fire({
                title: "Oops",
                text: res?.error?.data?.message,
                icon: "error",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          });
        }
      });
    }

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
          },
        {
            title: "Candidate Name",
            dataIndex: "candidate",
            key: "candidate", 
            render:(candidate)=><div className=' flex items-center gap-1'> 
 
 <img src={candidate?.img} style={{ height:"35px" , width:"35px" , borderRadius:"100%"}} /> 
 <p className=''>{candidate?.name}</p> 
            </div>
          },  
          {
            title: "Political Affiliation",
            dataIndex: "party",
            key: "party",
          }, 
          {
            title: "State",
            dataIndex: "state",
            key: "state",
          },
          {
            title: "Election",
            dataIndex: "election",
            key: "election",
          }, 
          {
            title: "Action",
            dataIndex: "action",
            key: "action", 
            render: (_,record) => (
                <div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setShowDetails(true) 
                 setModalData(record)}}
              >
               <FaRegEye className="text-xl font-semibold text-[#5C5C5C]" />
              </button>   
              <button
               onClick={()=>{setOpen(true) , setModalData(record)}}
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>   
            </div>
              ),
          }, 

    ]
    return (
        <div> 
            {/* header  */}
               <div className=" flex  items-center justify-between mb-5">
      <Title className="">Add Candidate</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} onChange={(e)=>handleSearch(e)} />  
      <button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]"> Add Candidate </span>
      </button>
      </div>
      </div>  

      <Table
            columns={columns}
            dataSource={data}
            pagination={{
              total:candidate?.pagination?.total, 
             page:page ,
             onChange:(page)=>setPage(page)
            }}
          />     

 <AddCandidateModal open={open}  setOpen={setOpen} modalData={modalData} refetch={refetch} setModalData={setModalData} /> 
 <ShowCandidateDetails showDetails={showDetails} setShowDetails={setShowDetails} modalData={modalData}  />

        </div>
    );
};

export default AddCandidate;