
import React from "react";

import Title from "../../Shared/Title";
import { Input, Table } from "antd";
import { IoSearchOutline } from "react-icons/io5"; 

const data = [
  {
    key: "1", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "2", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "3", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "4", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "5", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "6", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "7", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "8", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "9", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "10", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "11", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "12", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "13", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "14", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "15", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
  {
    key: "16", 
    date: "15 May 2020 8:00 am" , 
    account:"32165615616165" ,
    donation:"75 USD"
  },
 
];

function DonationHistory() { 
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'key',
    
    },
    {
      title: 'Date',
      dataIndex: 'date',
             
    },
    {
      title: 'Card / Account no',
      dataIndex: 'account',
    },
    {
      title: 'Donation Amount',
      dataIndex: 'donation', 
      render:(donation)=> <p  className="text-[#9C1E2E] font-[450]"> {donation}</p>
    },
  ]; 


  return (
    <div>   
      {/* header  */}
      <div className=" flex  items-center justify-between mb-5">
      <Title className="">Donation History</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"> 
        <span className=" font-[400]">Total Donation :</span> 
        <span className=" font-[450]"> 55075 USD </span>
      </button>
      </div>
      </div> 

      {/* table  */} 
      <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 14,
    }}

  />
     
  

    </div>
  );
}

export default DonationHistory;
