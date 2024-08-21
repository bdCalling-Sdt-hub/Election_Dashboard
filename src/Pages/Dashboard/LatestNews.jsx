import React, { useState } from 'react'; 
import newsImg from "../../assets/Login.png"
import Title from '../../Shared/Title';
import { IoSearchOutline } from 'react-icons/io5';
import { Checkbox, Input, Table } from 'antd';
import { FaRegEye } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import LatestNewsDetails from '../../Components/LatestNewsDetails';

const data=[
    {
        key: 1 ,
        image: newsImg ,
        title: "What Kamala Harris and Beyoncé have in common " ,      
    } ,
    {
        key: 1 ,
        image: newsImg ,
        title: "What Kamala Harris and Beyoncé have in common " ,      
    } ,
    {
        key: 1 ,
        image: newsImg ,
        title: "What Kamala Harris and Beyoncé have in common " ,      
    } ,

]
const LatestNews = () => {   
    const navigate = useNavigate() 
    const [open , setOpen]= useState(false) 
    const [modalData , setModalData] = useState(null)
    const handleAdd =()=>{
        navigate("/add-latest-news")
    }

    const columns =[
        {
            title: "S.No" ,
            dataIndex: "key",
            key: "key",
        } ,
        {
            title: "image" ,
            dataIndex: "image",
            key: "image", 
            render:(image)=> <img src={image} style={{ height:"70px" , width:"200px" , borderRadius:"10px"}} alt="" />
        } ,
        {
            title: "News Title" ,
            dataIndex: "title",
            key: "title",
        } ,
        {
            title: "Highlight" ,
            dataIndex: "highlight",
            key: "highlight", 
            render:(highlight)=><Checkbox className='ms-3'></Checkbox>
        } ,
        {
            title: "Action" ,
            dataIndex: "action",
            key: "action", 
            render:(_,record)=><div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setOpen(true) , setModalData(record)}}  
              >
               <FaRegEye className="text-xl font-semibold text-[#5C5C5C]" />
              </button>   
              <button
              onClick={handleAdd} 
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
      <Title className="">Add Latest News</Title> 
      <div className=" flex items-center gap-5 ">
      <Input placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={handleAdd} > 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]"> Add Latest News </span>
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
          <LatestNewsDetails open={open} setOpen={setOpen} modalData={modalData} />
        </div>
    );
};

export default LatestNews;