import React, {  useState } from "react";
import {  Table } from "antd";  
import Title from "../../Shared/Title"
import { FaRegEye } from "react-icons/fa";
import FeedbackModal from "../../Components/FeedbackModal";
const data = [
  {
    key: "1",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "2",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "3",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "4",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "5",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "6",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "7",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "8",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "9",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
  {
    key: "10",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
  {
    key: "11",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
  {
    key: "12",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
  {
    key: "13",
    feedback: "sed nec Nullam dignissim, faucibus Donec dui. turpis vel elit. ullamcorper ex hendrerit tortor. lacus quis tincidunt consectetur turpis Praesent vitae lorem. ",
  },
 
];

const Feedbacks = () => { 
    const [open,setOpen]=useState(false) 
    const [modalData , SetModalData] = useState(null)
    
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
              pageSize: 9   ,
            }}
          /> 

       <FeedbackModal open={open}  setOpen={setOpen} modalData={modalData}/>
    </div>
    );
};

export default Feedbacks;