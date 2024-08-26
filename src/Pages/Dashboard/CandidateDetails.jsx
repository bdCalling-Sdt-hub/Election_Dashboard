import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Title from '../../Shared/Title'; 
import candidate from "../../assets/candidate.png"
import { Input, Table } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';
import CandidateDetailsModal from '../../Components/CandidateDetailsModal';
import { useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteCandidateIssuesMutation, useGetCandidateQuery } from '../../redux/apiSlices/DashboardSlice';
import { imageUrl } from '../../redux/api/apislice';
import Swal from 'sweetalert2';
 

const CandidateDetails = () => { 
    const [open , setOpen]=useState(false)  
    const [modalData , SetModalData] = useState(null)   
   const [searchValue , setSearchValue]= useState("") 
   console.log(searchValue);
    const navigate = useNavigate()
    const {data:candidate , refetch} = useGetCandidateQuery(searchValue)    
    const [deleteCandidateIssues] = useDeleteCandidateIssuesMutation()
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

      const handleUpdate=(value)=>{ 
        if(value?.issues.length !== 0){
        navigate(`/candidate-issues?value=${encodeURIComponent(JSON.stringify(value))}`)
        } else{
            navigate("/candidate-issues")
        }
      }

    const handleAdd =()=>{
        navigate("/candidate-issues")
    }  

    const handleSearch =(e)=>{
      const data = e?.target?.value  
      setSearchValue(data)
     
    }

    const handleDelete =(id)=>{
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
              await deleteCandidateIssues(id).then((res) => {
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

    const columns=[
        {
            title: "S.No",
            dataIndex: "key", 
            key: "key",
        } ,
        {
            title: "Candidate Name",
            dataIndex: "candidate", 
            key: "candidate", 
            render:(candidate)=><div className=' flex items-center gap-1'> 
 
            <img src={candidate?.img} style={{ height:"40px" , width:"40px" , borderRadius:"100%"}} /> 
            <p className=''>{candidate?.name}</p> 
                       </div>
        } ,
        {
            title: "Key Voter Issues",
            dataIndex: "issues", 
            key: "issues", 
            render:(issues)=>( 
                issues.length !== 0 ?
                issues?.map((value , index)=><p key={index} className='  text-sm flex items-center  gap-1 leading-6'> 
                    <span> <GoDotFill/></span> 
                    <span>{value?.question} </span>
                </p>) : "No issues"
            )
        } ,
        {
            title: "Action",
            dataIndex: "action", 
            key: "action", 
            render: (_, record) => (
                <div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setOpen(true) , SetModalData(record)}}
              >
               <FaRegEye className="text-xl font-semibold text-[#5C5C5C]" />
              </button>   
              <button onClick={()=>handleUpdate(record)} >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>   
            </div>
              ),
        }
    ]
    return (
        <div>
                {/* header  */}
      <div className=" flex  items-center justify-between mb-5">
      <Title className="">Candidate Issues details</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} onChange={(e)=>handleSearch(e)} />  
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center" onClick={handleAdd}> 
        <span className=" font-[400] text-xl">+</span> 
        <span className=" font-[450]">Add Details</span>
      </button>
      </div>
      </div>  

{/* table  */} 

<Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 6   ,
            }}
          />  
<CandidateDetailsModal open={open} setOpen={setOpen} modalData={modalData}/>

        </div>
    );
};

export default CandidateDetails;