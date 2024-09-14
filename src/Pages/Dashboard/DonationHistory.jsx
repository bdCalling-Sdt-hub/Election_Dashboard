
import React, { useState } from "react";

import Title from "../../Shared/Title";
import { Input, Table } from "antd";
import { IoSearchOutline } from "react-icons/io5"; 
import { useGetDonationQuery } from "../../redux/apiSlices/DashboardSlice";
import moment from "moment";


function DonationHistory() {  
  const [page , setPage]= useState(1)
  const {data:donation}= useGetDonationQuery(page) 
  //console.log(donation); 
  const data = donation?.data?.data?.map((value , index)=>({
    key: index+1, 
    date: moment(value?.createdAt).format('D MMM  YYYY, h:mm a')  , 
    account:value?.trxId ,
    donation:`${value?.amount} USD`
  }))
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'key',
      render:(key)=><p>{((page-1)*10)+key}</p>
    },
    
    {
      title: 'Transaction Id',
      dataIndex: 'account',
    },
    {
      title: 'Donation Amount',
      dataIndex: 'donation', 
      render:(donation)=> <p  className="text-[#9C1E2E] font-[450]"> {donation}</p>
    }, 
    {
      title: 'Date',
      dataIndex: 'date',
             
    },
  ]; 


  return (
    <div>   
      {/* header  */}
      <div className=" flex  items-center justify-between mb-5">
      <Title className="">Donation History</Title> 
      <div className=" flex items-center gap-5 ">
     
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"> 
        <span className=" font-[400]">Total Donation :</span> 
        <span className=" font-[450]"> {donation?.data?.totalDonation} USD </span>
      </button>
      </div>
      </div> 

      {/* table  */} 
      <Table
    columns={columns}
    dataSource={data}
    pagination={{ 
      defaultCurrent:page ,
    total:donation?.pagination?.total  ,
    page:page ,
    onChange:(page)=>setPage(page)
    }}

  />
     
  

    </div>
  );
}

export default DonationHistory;
