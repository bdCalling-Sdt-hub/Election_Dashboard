import { Form, Input, Modal, Table, Button, Row, Col, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import FaqModal from "../../Components/FaqModal";
import Title from "../../Shared/Title";
import { IoSearchOutline } from "react-icons/io5";
import { useDeleteFaqMutation, useGetFaqQuery } from "../../redux/apiSlices/DashboardSlice";
import Swal from "sweetalert2";


const FAQ = () => { 
    const [openAddModel, setOpenAddModel] = useState(false); 
    const [modalData , setModalData]= useState() 
    const [page , setPage]=useState(1)
    const {data:faqData ,refetch } = useGetFaqQuery(page)   
    const [deleteFaq] = useDeleteFaqMutation()

    //console.log(faqData);  
    const faqDatas = faqData?.data 

    const handleDelete=(id)=>{ 
      //console.log(id);
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
          await deleteFaq(id).then((res) => {
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
    return (
        <div className="  "> 
             <div className=" flex  items-center justify-between mb-5">
      <Title className="">Frequently Asked Questions</Title> 
      <div className=" flex items-center gap-5 ">
      
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={() => {
                    setOpenAddModel(true);
                  }}> 
        <span className=" font-[500] text-xl">+</span> 
        <span className=" font-[450]">Add FAQ </span>
      </button>
      </div>
      </div> 
       
        <div className="bg-white py-6 px-4 rounded-md">
          {faqDatas?.map((item, index) => (
            <div key={index+1} className="flex justify-between items-start gap-4 ">
              <div className="mt-3">
                <GoQuestion color="#07254A" size={25} />
              </div>
              <div className="w-full ">
                <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 ">
                  <span className=" flex-1 "> {item?.question}</span>
                </p>
                <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 ">
                  <p className="text-[#919191] leading-[24px] ">
                  {item?.answer}
                  </p>
                </div>
              </div>
              <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
                <CiEdit
                  onClick={() => {
                    setOpenAddModel(true) 
                    setModalData(item)
                  }}
                  className="text-2xl cursor-pointer text-[#07254A]"
                />
                <RxCross2
                  onClick={() =>handleDelete(item?._id)}
                  className="text-2xl cursor-pointer text-red-600"
                />
              </div>
            </div>
          ))}
        </div> 
        <div className="text-end my-2">
        <Pagination align="end" defaultCurrent={page} total={faqData?.pagination?.total} page={page} onChange={(page)=>setPage(page)} />
        </div>
 
        <FaqModal setOpenAddModel={setOpenAddModel} openAddModel={openAddModel} refetch={refetch} modalData={modalData} setModalData={setModalData} />
        
       
      </div>
    );
};

export default FAQ;