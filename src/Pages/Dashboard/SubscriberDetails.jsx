import React from 'react';
import Title from '../../Shared/Title';
import { Input, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5'; 

const data = [
    {
        key :"1" ,
        email:"mithila@gmail.com"
    }  ,
    {
        key :"2" ,
        email:"shanto@gmail.com"
    }  ,
    {
        key :"3" ,
        email:"Mehedi@gmail.com"
    }  ,
    {
        key :"4" ,
        email:"Fahim@gmail.com"
    }  ,
    {
        key :"5" ,
        email:"Asad@gmail.com"
    }  ,
    {
        key :"6" ,
        email:"Khushi@gmail.com"
    }  ,
    {
        key :"7" ,
        email:"Arif@gmail.com"
    }  ,
    {
        key :"8" ,
        email:"mithila@gmail.com"
    }  ,
    {
        key :"9" ,
        email:"shanto@gmail.com"
    }  ,
    {
        key :"10" ,
        email:"Mehedi@gmail.com"
    }  ,
    {
        key :"11" ,
        email:"Fahim@gmail.com"
    }  ,
    {
        key :"12" ,
        email:"Asad@gmail.com"
    }  ,
    {
        key :"13" ,
        email:"Khushi@gmail.com"
    }  ,
    {
        key :"14" ,
        email:"Arif@gmail.com"
    }  ,
    {
        key :"15" ,
        email:"Asad@gmail.com"
    }  ,
    {
        key :"16" ,
        email:"Khushi@gmail.com"
    }  ,
    {
        key :"17" ,
        email:"Arif@gmail.com"
    }  ,

]

const SubscriberDetails = () => { 

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
      <Input  placeholder="Search Email...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      </div> 

   
        
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 14,
            }}
          />
        </div>

        </div>
    );
};

export default SubscriberDetails;