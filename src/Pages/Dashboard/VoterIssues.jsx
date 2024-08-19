import React, {  useState } from "react";
import { Input,  Table } from "antd";  
import { IoSearchOutline } from "react-icons/io5";
import Title from "../../Shared/Title"
import VoterIssuesModal from "../../Components/VoterIssuesModal";
import { FaRegEye } from "react-icons/fa";
const data = [
  {
    key: "1",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "2",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "3",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "4",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "5",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "6",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "7",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "1",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "8",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "9",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "10",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  {
    key: "11",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
  {
    key: "11",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
  {
    key: "12",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
  {
    key: "13",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
  {
    key: "14",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
  {
    key: "15",
    state:"California" , 
    dob : "9 Dec 2024",
    issues: ["On  Climate Change" , "On the Israel - Palestine  Conflict" , "On Reproductive Rights"] ,   
  },
  
 
];

const VoterIssues = () => {
const [open,setOpen]=useState(false) 
const [modalData , SetModalData] = useState(null)

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Date of birth ",
      dataIndex: "dob",
      key: "dob",
    },

    {
      title: "Issues",
      dataIndex: "issues",
      key: "issues", 
      render:(issues)=><div> 
      {issues.slice(0,2).join(" , ")}....
      </div>
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
      <div className=" flex  items-center justify-between mb-5"> 
      <Title className="">Voters important issues</Title>
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      </div>
     
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 12,
            }}
          />
        </div>
      </div>
       <VoterIssuesModal open={open}  setOpen={setOpen} modalData={modalData}/>
    </div>
  );
};

export default VoterIssues;
