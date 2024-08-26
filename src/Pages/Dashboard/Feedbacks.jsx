import React, {  useState } from "react";
import {  Table } from "antd";  
import Title from "../../Shared/Title"
import { FaRegEye } from "react-icons/fa";
import FeedbackModal from "../../Components/FeedbackModal";
import { useGetFeedbackQuery } from "../../redux/apiSlices/DashboardSlice";


const Feedbacks = () => { 
    const [open,setOpen]=useState(false) 
    const [modalData , SetModalData] = useState(null)  
    const [page ,setPage]=useState(1)
    const {data:feedbacks} = useGetFeedbackQuery()  
    console.log(feedbacks);
    
const data = feedbacks?.data?.map((value , index)=>({
  key: index+1,
  feedback:value?.content
}))

      const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key",
        },

        {
          title: "Feedback",
          dataIndex: "feedback",
          key: "feedback", 
          width: "70%",
        },
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
        </div>
          ),
        },
      ];
    

    
    return (
        <div>  
     
      <Title className="mb-5">Voters feedbacks</Title>
     
      <Table
            columns={columns}
            dataSource={data}
            pagination={{
             total:feedbacks?.pagination?.total, 
             page:page ,
             onChange:(page)=>setPage(page)
            }}
          /> 

       <FeedbackModal open={open}  setOpen={setOpen} modalData={modalData}/>
    </div>
    );
};

export default Feedbacks;