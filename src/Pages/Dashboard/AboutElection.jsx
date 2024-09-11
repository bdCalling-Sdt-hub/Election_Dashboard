import React, { useState } from 'react';
import Title from '../../Shared/Title';  
import Icon from "../../assets/Icon.png"
import { Table } from 'antd';
import AddContentModal from '../../Components/AddContentModal';
import { Link } from 'react-router-dom';
import { useDeleteAboutElectionMutation, useGetAboutElectionQuery } from '../../redux/apiSlices/DashboardSlice';
import { imageUrl } from '../../redux/api/apislice';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import Swal from 'sweetalert2';

const AboutElection = () => { 
    const [open , setOpen] = useState(false)   
    const [modalData , setModalData] = useState(null)
    const [page ,setPage]=useState(1)
    const {data:aboutElection , refetch} = useGetAboutElectionQuery()   
    const [deleteAboutElection] = useDeleteAboutElectionMutation()
    console.log(aboutElection); 
    const data = aboutElection?.data?.map((value , index)=>({
        key: index+1 ,
        title:value?.title , 
        id:value?._id ,
        Icon: value?.image.startsWith("https")? value?.image : `${imageUrl}${value?.image}`,
        election: value?.url
    })) 

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
              await deleteAboutElection(id).then((res) => {
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

    const columns =[
        {
            title: "S.No",
            dataIndex: "key", 
            key: "key", 
            render:(_,record,index)=> <p>{((page-1)*10)+ record?.key}</p>
        } ,
        {
            title: "Title",
            dataIndex: "title", 
            key: "title",
        } ,
        {
            title: "Icon",
            dataIndex: "Icon", 
            key:"Icon" ,
            render:(Icon)=><img src={Icon} alt=""  height={20} width={35}/>
        } ,
        {
            title: "Election",
            dataIndex: "election", 
            key:"election" ,
            render:(election)=> <Link to={election}> <p>{election}</p> </Link>
        } , 
         {
                title:"Action" ,
                dataIndex:"action" ,
                key:"action" ,
                render:(_,record)=>(  <div
                    className=" flex items-center gap-2 "
                    >
                 

                      <button
                       onClick={()=>{setOpen(true) , setModalData(record)}}
                      >
                       <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
                      </button>  
                      <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>   
                    </div>)
        }

    ]
    return (
        <div>
             <div className=' flex justify-between items-center mb-5'>
<Title >About U.S. elections</Title> 
<button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]">  Add Content </span>
      </button>
             </div> 

             <Table
            columns={columns}
            dataSource={data}
            pagination={{ 
              current: parseInt(page), 
              total:aboutElection?.pagination?.total, 
              page:page ,
              onChange:(page)=>setPage(page)
            }}
          />   

          <AddContentModal open={open} setOpen={setOpen} modalData={modalData} refetch={refetch} setModalData={setModalData} />  

        </div>
    );
};

export default AboutElection;