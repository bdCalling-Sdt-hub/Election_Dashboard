import React, { useState } from 'react';
import Title from '../../Shared/Title';
import { Input, Table } from 'antd';
import { IoSearchOutline } from 'react-icons/io5'; 
import candidate from "../../assets/candidate.png"
import { FaRegEye } from 'react-icons/fa';
import AddCandidateModal from '../../Components/AddCandidateModal';
import ShowCandidateDetails from '../../Components/ShowCandidateDetails';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
 
const data =[
    {
        key:1  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Democratic Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:2  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Republican Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:3  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Green Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:5  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Libertarian Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:6  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Others" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:7  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Democratic Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:8  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Republican Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:9  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Green Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:10  , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Libertarian Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 
    {
        key:11 , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Others" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , , 
    {
        key:12   , 
        candidate:{
 name:"Joe Biden" ,
 img: candidate
        }  ,
      party:"Democratic Party" , 
      state:"California " ,
      election:"2024 Senate Election"    
    } , 

]

const AddCandidate = () => { 
    const [open , setOpen] = useState(false)  
    const [showDetails , setShowDetails]= useState(false)
    const [modalData , SetModalData] = useState(null) 

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
          },
        {
            title: "Candidate Name",
            dataIndex: "candidate",
            key: "candidate", 
            render:(candidate)=><div className=' flex items-center gap-1'> 
 
 <img src={candidate?.img} style={{ height:"35px" , width:"35px" , borderRadius:"100%"}} /> 
 <p className=''>{candidate?.name}</p> 
            </div>
          },  
          {
            title: "Political Affiliation",
            dataIndex: "party",
            key: "party",
          }, 
          {
            title: "State",
            dataIndex: "state",
            key: "state",
          },
          {
            title: "Election",
            dataIndex: "election",
            key: "election",
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
               onClick={()=>{setShowDetails(true) , SetModalData(record)}}
              >
               <FaRegEye className="text-xl font-semibold text-[#5C5C5C]" />
              </button>   
              <button
               onClick={()=>{setOpen(true) , SetModalData(record?.key)}}
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button> <MdDeleteOutline  size={22}/> </button>   
            </div>
              ),
          }, 

    ]
    return (
        <div> 
            {/* header  */}
               <div className=" flex  items-center justify-between mb-5">
      <Title className="">Add Candidate</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]"> Add Candidate </span>
      </button>
      </div>
      </div>  

      <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 9   ,
            }}
          />     

 <AddCandidateModal open={open}  setOpen={setOpen} modalData={modalData} /> 
 <ShowCandidateDetails showDetails={showDetails} setShowDetails={setShowDetails} modalData={modalData} />

        </div>
    );
};

export default AddCandidate;