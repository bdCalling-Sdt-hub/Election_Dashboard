import React, { useState } from 'react';
import Title from '../../Shared/Title';
import { Button, Form, Input, Modal, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci'; 
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteElectionMutation, useGetElectionQuery } from '../../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';
import ElectionModal from '../../Components/ElectionModal';


const Election = () => { 
    const [open , setOpen] = useState(false)  
    const [modalData , SetModalData] = useState(null) 
    const {data:election , refetch} = useGetElectionQuery()   
    const [page ,setPage]=useState(1)
    console.log(election);
    const [deleteElection] = useDeleteElectionMutation()
    // console.log(election);   
    
    const data = election?.data?.map((value , index)=>({
        key:index+1 , 
        id: value?._id ,
       name:value?.name
   }))   


//    delete 
const handleDelete=async(id)=>{
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
          await deleteElection(id).then((res) => {
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
        } ,
        {
            title: "Election Name",
            dataIndex: "name",
            key: "name",
        } ,
        {
            title: "Action",
            dataIndex: "action",
            key: "action", 
            render:(_, record)=><div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setOpen(true) , SetModalData(record)}}
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>  
            </div>
        } ,
    ]  
    return (
        <div>
        {/* header  */}
        <div className=" flex  items-center justify-between mb-5">
<Title className="">Add Election</Title> 
<div className=" flex items-center gap-5 ">
<button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
<span className=" font-[400] text-[20px]"> + </span> 
<span className=" font-[450]"> Add Election </span>
</button>
</div>
</div>  

{/* table  */}
<Table
columns={columns}
dataSource={data} 
pagination={{
  total:election?.pagination?.total, 
  page:page ,
  onChange:(page)=>setPage(page)
}}
/>   

<ElectionModal open={open} setOpen={setOpen}  modalData={modalData}  SetModalData={SetModalData} refetch={refetch}/>

</div>
    );
};

export default Election;