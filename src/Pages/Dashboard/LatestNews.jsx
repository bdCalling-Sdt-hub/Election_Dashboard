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
import { useDeleteNewsMutation, useGetNewsQuery, useUpdateHighlightMutation } from '../../redux/apiSlices/DashboardSlice';
import { imageUrl } from '../../redux/api/apislice';
import Swal from 'sweetalert2';

const LatestNews = () => {   
    const navigate = useNavigate()  
   
    const [deleteNews] = useDeleteNewsMutation()  
    const [page , setPage] =useState(1)
    const [searchValue , setSearchValue]=useState("") 
    //console.log(searchValue); 
    const {data:news ,refetch} = useGetNewsQuery({page:page ,search:searchValue})  
    const [updateHighlight] =useUpdateHighlightMutation() 
    //console.log(news);
    const [open , setOpen]= useState(false) 
    const [modalData , setModalData] = useState(null) 

const data = news?.data?.map((value , index)=>({
    key: index+1 ,
    image: value?.image.startsWith("https")? value?.image : `${imageUrl}${value?.image}` ,
    title: value?.title,   
    highlight:value?.highlight ,
    description:value?.description , 
    id: value?._id
}))

    const handleUpdate =(value)=>{
        navigate(`/add-latest-news?value=${encodeURIComponent(JSON.stringify(value))}`)
    }  
    const handleAdd=()=>{
        navigate("/add-latest-news")
    }

    const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
          }).then(async (result) => {
            if (result.isConfirmed) {
              await deleteNews(id).then((res) => {
                if (res?.data?.success) {
                  Swal.fire({
                    text: res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    refetch();
                  });
                } else {
                  Swal.fire({
                    title: "Oops",
                    text: res?.error?.data?.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }
              });
            }
          });
    } 

    const handleHighlight=async(id)=>{ 
      await updateHighlight(id).then((res)=>{
        if(res?.data?.success){
          Swal.fire({
              text:res?.data?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              refetch();  
            })
      }else{
          Swal.fire({
              title: "Oops",
              text: res?.error?.data?.message,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
        
      }
      })

    }

    const columns =[
        {
            title: "S.No" ,
            dataIndex: "key",
            key: "key", 
            render:(key)=><p>{((page-1)*10)+key}</p>
        } ,
        {
            title: "image" ,
            dataIndex: "image",
            key: "image", 
            render:(image)=> <img src={image} style={{ height:"80px" , width:"200px" , borderRadius:"10px" ,}} className='aspect-video' alt="" />
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
            render:(_,record)=><Checkbox checked={record?.highlight} className='ms-3' onChange={()=>handleHighlight(record?.id)}></Checkbox>
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
              onClick={()=>{handleUpdate(record) }} 
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>   
            </div>
        } ,

    ] 

    const handleChange=(e)=>{
      const data = e?.target?.value  
      setSearchValue(data)
    }
    return (
        <div>
                                 {/* header  */}
                                 <div className=" flex  items-center justify-between mb-5">
      <Title className="">Add Latest News</Title> 
      <div className=" flex items-center gap-5 ">
      <Input placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-[#07254A]" />} style={{ width:"400px" , height:"45px"}} onChange={(e)=>handleChange(e)} />  
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
              defaultCurrent:page,
             total:news?.pagination?.total ,
             page:page ,
            onChange:(page)=>setPage(page)
            }}
          />   
          <LatestNewsDetails open={open} setOpen={setOpen} modalData={modalData} />
        </div>
    );
};

export default LatestNews;