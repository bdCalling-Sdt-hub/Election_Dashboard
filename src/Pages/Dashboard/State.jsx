import React, { useState } from 'react';
import Title from '../../Shared/Title';
import { Button, Form, Input, Modal, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci'; 
import { MdDeleteOutline } from "react-icons/md";

const data=[
    {
        key:1 ,
        state:"Bangladesh"
    } ,
    {
        key:2 ,
        state:"India"
    } ,
    {
        key:3 ,
        state:"Pakistan"
    } ,
    {
        key:4 ,
        state:"Korea"
    } ,
    {
        key:5 ,
        state:"Japan"
    } ,
    {
        key:6 ,
        state:"Bangladesh"
    } ,
    {
        key:7 ,
        state:"California"
    } ,
    {
        key:8 ,
        state:"Boston"
    } ,
    {
        key:9 ,
        state:"Iowa"
    } ,
    {
        key:10 ,
        state:"India"
    } , 
    {
        key:11 ,
        state:"Bangladesh"
    } ,
    {
        key:12 ,
        state:"India"
    } ,
    {
        key:13 ,
        state:"Pakistan"
    } ,
    {
        key:14 ,
        state:"Korea"
    } ,
    {
        key:15 ,
        state:"Japan"
    } ,
    {
        key:16 ,
        state:"Bangladesh"
    } ,
    {
        key:17 ,
        state:"California"
    } ,
    {
        key:18 ,
        state:"Boston"
    } ,
    {
        key:19 ,
        state:"Iowa"
    } ,
    {
        key:20 ,
        state:"India"
    } ,


]

const State = () => { 
    const [open , setOpen] = useState(false)  
    const [modalData , SetModalData] = useState(null)
    const columns =[
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
        } ,
        {
            title: "State Name",
            dataIndex: "state",
            key: "state",
        } ,
        {
            title: "Action",
            dataIndex: "action",
            key: "action", 
            render:(_, record)=><div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setOpen(true) , SetModalData(record?.key)}}
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button> <MdDeleteOutline  size={22}/> </button>  
            </div>
        } ,
    ]
    return (
        <div>
                       {/* header  */}
                       <div className=" flex  items-center justify-between mb-5">
      <Title className="">Add State</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]"> Add State </span>
      </button>
      </div>
      </div>  

      {/* table  */}
      <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 13   ,
            }}
          />   

          <Modal  
           open={open}
        onCancel={() => setOpen(false)}                   
        centered
        footer={false}          
        width={500} > 
  <Form layout='vertical' className=' p-8 pb-2'>  
    <p className=' pb-3 text-lg font-[500]'> {modalData ? "Update State" : "Add State"}</p>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input State Name",
                  },
                ]} 
                label={<p className="text-[#6D6D6D] ">State Name</p>}
                
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>  

              <Form.Item className=' text-center'> 
              <Button htmlType='submit' style={{
                backgroundColor:"#07254A" ,
                color:"#FEFEFE", 
                borderRadius:"12px" ,
                width:"50%" ,
                height:"45px"
              }}>
                Confirm
              </Button>
              </Form.Item>
              </Form>
          </Modal>

        </div>
    );
};

export default State;