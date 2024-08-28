import React, {  useEffect, useState } from "react";
import { Input,  Table } from "antd";  
import { IoSearchOutline } from "react-icons/io5";
import Title from "../../Shared/Title"
import VoterIssuesModal from "../../Components/VoterIssuesModal";
import { FaRegEye } from "react-icons/fa";
import { useGetVoterIssuesQuery } from "../../redux/apiSlices/DashboardSlice";
import moment from "moment";

const VoterIssues = () => {
const [open,setOpen]=useState(false) 
const [modalData , SetModalData] = useState(null)   
const [page , setPage] = useState(1)
const {data:voterIssues ,refetch} = useGetVoterIssuesQuery() 
console.log(voterIssues); 



const data = voterIssues?.data?.map((value, index)=>({
  key: index+1,
  state:value?.state , 
  dob : moment(value?.dateOfBirth).format('D MMM  YYYY'),
  issues: value?.issues , 
}))

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
              total:voterIssues?.pagination?.total , 
              page:page ,
              onChange:(page)=>setPage(page)
             
            }}
          />
        </div>
      </div>
       <VoterIssuesModal open={open}  setOpen={setOpen} modalData={modalData}/>
    </div>
  );
};

export default VoterIssues;
