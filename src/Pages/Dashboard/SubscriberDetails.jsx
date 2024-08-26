import React, { useState } from 'react';
import Title from '../../Shared/Title';
import { Input, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5'; 
import { useSubscriberQuery } from '../../redux/apiSlices/DashboardSlice';

// const data = [
//     {
//         key :"1" ,
//         email:"mithila@gmail.com"
//     }  
// ]

const SubscriberDetails = () => {  
  
    const {data:subscriber} = useSubscriberQuery()   
    const [page ,setPage]=useState(1)
  
    console.log(subscriber); 

    const data = subscriber?.data?.map((value, index)=>({ 
         key : index+1 ,
        email:value?.email
    }))

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
          }, 
          {
            title: "Email",
            dataIndex: "email",
            key: "email", 
        
          },
    ] 


    return (
        <div>
              <div className=" flex  items-center justify-between mb-5"> 
      <Title className="">Subscribers</Title>
       
      </div> 

   
        
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              total:subscriber?.pagination?.total, 
             page:page ,
             onChange:(page)=>setPage(page)
            }}
          />
        </div>

        </div>
    );
};

export default SubscriberDetails;