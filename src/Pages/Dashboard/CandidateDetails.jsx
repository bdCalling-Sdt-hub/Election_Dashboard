import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Title from '../../Shared/Title'; 
import candidate from "../../assets/candidate.png"
import { Input, Table } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';
import CandidateDetailsModal from '../../Components/CandidateDetailsModal';
import { useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
 
const data =[
    {
        key:1 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:2 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:3,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:4 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:5,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:6 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:7 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:8 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:9 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
    {
        key:10 ,
       candidate:{
        name:"Chose Oliver" ,
        img: candidate
       } ,
       issues:[
        {
            title:"On  Climate Change " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio eveniet at iusto ipsa rem aliquid qui cupiditate ex iure dignissimos dolorum, impedit quasi rerum nam consequatur maxime atque itaque?" 
        } ,
        {
            title:"On the Israel - Palestine  Conflict " ,
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae, doloribus atque assumenda commodi facere sed nulla corporis beatae accusantium quidem ipsa rerum similique fugiat error distinctio vel quis temporibus." 
        } ,
        {
            title:"On Reproductive Rights " ,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi maxime sint animi reprehenderit distinctio quas, deserunt odio, laboriosam velit voluptate neque provident cumque repellendus aut sed doloremque magni harum!"
        } ,
       ]
    } ,
]

const CandidateDetails = () => { 
    const [open , setOpen]=useState(false)  
    const [modalData , SetModalData] = useState(null)  
    const navigate = useNavigate()

    const handleAdd =()=>{
        navigate("/candidate-issues")
    }

    const columns=[
        {
            title: "S.No",
            dataIndex: "key", 
            key: "key",
        } ,
        {
            title: "Candidate Name",
            dataIndex: "candidate", 
            key: "candidate", 
            render:(candidate)=><div className=' flex items-center gap-1'> 
 
            <img src={candidate?.img} style={{ height:"40px" , width:"40px" , borderRadius:"100%"}} /> 
            <p className=''>{candidate?.name}</p> 
                       </div>
        } ,
        {
            title: "Key Voter Issues",
            dataIndex: "issues", 
            key: "issues", 
            render:(issues)=>(
                issues?.map((value , index)=><p key={index} className='  text-sm flex items-center  gap-1 leading-6'> 
                    <span> <GoDotFill/></span> 
                    <span>{value?.title} </span>
                </p>)
            )
        } ,
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
              <button onClick={handleAdd} >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button> <MdDeleteOutline  size={22}/> </button>   
            </div>
              ),
        }
    ]
    return (
        <div>
                {/* header  */}
      <div className=" flex  items-center justify-between mb-5">
      <Title className="">Candidate Issues details</Title> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} />  
      <button className=" flex gap-2 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center" onClick={handleAdd}> 
        <span className=" font-[400] text-xl">+</span> 
        <span className=" font-[450]">Add Details</span>
      </button>
      </div>
      </div>  

{/* table  */} 

<Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 6   ,
            }}
          />  
<CandidateDetailsModal open={open} setOpen={setOpen} modalData={modalData}/>

        </div>
    );
};

export default CandidateDetails;