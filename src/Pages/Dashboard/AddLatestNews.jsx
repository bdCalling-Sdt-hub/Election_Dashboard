import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Shared/Title'; 
import JoditEditor from "jodit-react";
import { Button, Form, Input } from 'antd';
import { PiImageThin } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateNewsMutation, useGetNewsQuery, useUpdateNewsMutation } from '../../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';

const AddLatestNews = () => {  

    const [imgFile, setImgFile] = useState(null);  
    const [imgUrl , setImgUrl] =useState()  
    const [updateNews] = useUpdateNewsMutation() 
    const [createNews] = useCreateNewsMutation()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const value = queryParams.get('value');
    const newsValue = value ? JSON.parse(decodeURIComponent(value)) : null; 
    const navigate = useNavigate() 
    const {data:news ,refetch} = useGetNewsQuery() 
    console.log(newsValue); 
    const [form] = Form.useForm() 

    const handleChange = (e) => { 
      const file = e.target.files[0]
      setImgFile(file); 
      setImgUrl(URL.createObjectURL(file))
    }; 
    const editor = useRef(null);
    const [content, setContent] = useState(""); 

    useEffect(()=>{ 
      if(newsValue){
        form.setFieldsValue({name:newsValue?.title}) 
        setContent(newsValue?.description) 
        setImgUrl(newsValue?.image)
      }
    } ,[])

// useEffect(()=>{ 
//   setContent()
// },[])

    const config = {
      readonly: false,
      placeholder: "Start typings...",
      style: {
        height: 400,
      },
    };   

const handleSubmit =async(values)=>{ 
  console.log(values); 
  
 const formData = new FormData()  
 if(imgFile){
  formData.append("image",imgFile)
 } 
 formData.append("title",values?.name) 
 formData.append("description",content)  
 Object.entries(formData).forEach(([field , value])=>{
  console.log(`${field} ${value}`);
 })
const id = newsValue?.id
 if(newsValue){
await updateNews({id,formData}).then((res)=>{
  if(res?.data?.success){
    Swal.fire({
        text:res?.data?.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch(); 
        navigate("/latest-news")

        form.resetFields() 
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
 }else{
  await createNews(formData).then((res)=>{
    if(res?.data?.success){
      Swal.fire({
          text:res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch(); 
          navigate("/latest-news")
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


}

    return (
        <div>
            <Title className="">{newsValue?.id ? "Update latest news" : "Add latest news"}</Title>  
            <Form className='w-2/3 my-4 ' onFinish={handleSubmit} layout='vertical' form={form}>  
                <Form.Item name="name" label={<p className='text-[#6D6D6D] '>Name:</p>}> 
                <Input style={{ height:"45px"}} />
                </Form.Item>  
                <div>
                <p className="text-[#6D6D6D] py-1"> Image:</p> 
                <label
                htmlFor="image"
                style={{ display: "block", backgroundColor:"white" }}
                className="p-3 border rounded-lg"
              > 
              
                <Form.Item name="images" >
                  <div className="flex justify-center items-center w-full h-full   py-4">
                    {imgUrl ? (
                      <img src={imgUrl} alt="" />
                    ) 
                     : (
                      <PiImageThin className="text-7xl flex items-center justify-center text-[#666666] font-[400]" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
                </div>
          
          

            <div> 
            <p className="text-[#6D6D6D] py-1">Details:</p> 
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
      <Form.Item
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button htmlType='submit'
          style={{
            height: "44px",
            width: "100%",
            backgroundColor: "#07254A",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </Button> 
        
      </Form.Item> 
      </Form> 
        </div>
    );
};

export default AddLatestNews;