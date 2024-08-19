import { Form, Input, Modal, Table, Button, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import FaqModal from "../../Components/FaqModal";
import Title from "../../Shared/Title";
import { IoSearchOutline } from "react-icons/io5";


const data = [
  {
    key: "1",
    question: "What is an affiliate e-commerce website?",
    ans: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
  },
  {
    key: "2",
    question: "What is an affiliate e-commerce website?",
    ans: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
  },
  {
    key: "3",
    question: "What is an affiliate e-commerce website?",
    ans: "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
  },
 
];

const FAQ = () => { 
    const [openAddModel, setOpenAddModel] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    return (
        <div className="  "> 
             <div className=" flex  items-center justify-between mb-5">
      <Title className="">Frequently Asked Questions</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={() => {
                    setOpenAddModel(true);
                  }}> 
        <span className=" font-[500] text-xl">+</span> 
        <span className=" font-[450]">Add FAQ </span>
      </button>
      </div>
      </div> 
       
        <div className="bg-white py-6 px-4 rounded-md">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-start gap-4 ">
              <div className="mt-3">
                <GoQuestion color="#07254A" size={25} />
              </div>
              <div className="w-full ">
                <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 ">
                  <span className=" flex-1 "> {item?.question}</span>
                </p>
                <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 ">
                  <p className="text-[#919191] leading-[24px] mb-6 ">
                    NIFI is a comprehensive nail salon platform app designed to
                    connect clients with top-rated nail salons and professionals,
                    offering features like appointment booking, style exploration,
                    and business management tools.
                  </p>
                </div>
              </div>
              <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
                <CiEdit
                  onClick={() => {
                    setOpenAddModel(true);
                  }}
                  className="text-2xl cursor-pointer text-[#07254A]"
                />
                <RxCross2
                  onClick={() => {
                    setDeleteId(item?._id);
                    setShowDelete(true);
                  }}
                  className="text-2xl cursor-pointer text-red-600"
                />
              </div>
            </div>
          ))}
        </div>
  
        <FaqModal setOpenAddModel={setOpenAddModel} openAddModel={openAddModel} />
        
        <Modal
          centered
          open={showDelete}
          onCancel={() => setShowDelete(false)}
          width={400}
          footer={false}
        >
          <div className="p-6 text-center">
            <p className="text-[#6A5ECC] text-center font-semibold">
              Are you sure !
            </p>
            <p className="pt-4 pb-12 text-center">
              Do you want to delete this content ?
            </p>
            <button
              // onClick={handeldelete}
              className="bg-[#07254A] py-2 px-5 text-white rounded-md"
            >
              Confirm
            </button>
          </div>
        </Modal>
      </div>
    );
};

export default FAQ;