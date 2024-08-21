import React, { useState } from 'react';
import Title from '../../Shared/Title';  
import Icon from "../../assets/Icon.png"
import { Table } from 'antd';
import AddContentModal from '../../Components/AddContentModal';
import { Link } from 'react-router-dom';

const data =[
    {
        key: 1 ,
        title:"Democratic Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 2 ,
        title:"Republican Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 3 ,
        title:"Libertarian Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 4 ,
        title:"Green Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 5 ,
        title:"Others" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 6 ,
        title:"Democratic Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 7,
        title:"Republican Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 8 ,
        title:"Libertarian Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 9 ,
        title:"Green Party" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
    {
        key: 10 ,
        title:"Others" ,
        Icon: Icon,
        election:"https://vote.gov/register/alabama"
    } ,
]

const AboutElection = () => { 
    const [open , setOpen] = useState(false) 

    const columns =[
        {
            title: "S.No",
            dataIndex: "key", 
            key: "key",
        } ,
        {
            title: "Title",
            dataIndex: "title", 
            key: "title",
        } ,
        {
            title: "Icon",
            dataIndex: "Icon", 
            key:"Icon" ,
            render:(Icon)=><img src={Icon} alt=""  height={20} width={35}/>
        } ,
        {
            title: "Election",
            dataIndex: "election", 
            key:"election" ,
            render:(election)=> <Link to={election}> <p>{election}</p> </Link>
        } ,

    ]
    return (
        <div>
             <div className=' flex justify-between items-center mb-5'>
<Title >About U.S. elections</Title> 
<button className=" flex gap-1 text-white bg-[#07254A]  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]">  Add Content </span>
      </button>
             </div> 

             <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 9   ,
            }}
          />   

          <AddContentModal open={open} setOpen={setOpen} />  

        </div>
    );
};

export default AboutElection;