import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { PiImageThin } from "react-icons/pi";
import { usePostAboutElectionMutation, useUpdateAboutElectionMutation } from '../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';


const AddContentModal = ({open , setOpen ,setModalData ,refetch ,modalData}) => {   
  const [updateAboutElection] = useUpdateAboutElectionMutation() 
  const [postAboutElection] = usePostAboutElectionMutation()
  console.log(modalData);
  const [form] = Form.useForm()
  const [imgFile, setImgFile] = useState(null); 
  const [imageUrl , setImageUrl] = useState()  

  useEffect(()=>{  
    if(modalData){
      form.setFieldsValue({title:modalData?.title , url:modalData?.election}) 
      setImageUrl(modalData?.Icon)
    }
   
  } ,[modalData]) 

    const handleChange = (e) => { 
      const file = e.target.files[0]
      setImgFile(file);
      setImageUrl(URL.createObjectURL(file))
    }; 

const onFinish =async(values)=>{
  console.log(values);  
  const formData = new FormData() 
  if(imgFile){
    formData.append("image" ,imgFile)
  } 
const {images , ...otherValues} = values 

Object.entries(otherValues).forEach(([field , value])=>{
  formData.append(field , value)
}) 

const id = modalData?.id

if(modalData?.id){
  await updateAboutElection({id , formData}).then((res)=>{
    if(res?.data?.success){
      Swal.fire({
          text:res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch(); 
          setOpen(false);
          setModalData(null)  
          setImageUrl(null)
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
  await postAboutElection(formData).then((res)=>{
    if(res?.data?.success){
      Swal.fire({
          text:res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch(); 
          setOpen(false);
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
        <Modal 
 
open={open}
onCancel={() => {setOpen(false)  , setImgFile(null)  , setModalData(null), form.resetFields()}}                   
centered
footer={false}          
width={500}
>  
<div className=' p-5'> 
<p className=' pb-3 text-lg font-[500]'> {modalData ? "Update About Election" : "Add About Election"}</p>
<Form onFinish={onFinish} form={form}>
<div>
<p className="text-[#6D6D6D] py-1">Title:</p>
<Form.Item
  name="title"
  rules={[
    {
      required: true,
      message: "Please input Title",
    },
  ]}
>
  <Input
    className="w-[100%] border outline-none px-3 py-[10px]"
    type="text"
  />
</Form.Item>
</div>
<div className=' py-[10px]'>
<p className="text-[#6D6D6D] py-1">Icon</p>

<label
  htmlFor="image"
  style={{ display: "block", margin: "4px 0" }}
  className="p-3 border rounded-lg"
>
  <Form.Item name="images" 
  // rules={[
  //                       {
  //                           required: true,
  //                           validator: () => {
  //                               if (!imageUrl || !imgFile) {
  //                                 return Promise.reject("Please select a Image");
  //                               }
  //                               return Promise.resolve();
  //                           }
  //                       }
  //                   ]} 
                    >
    <div className="flex justify-center items-center w-full h-full   py-4">
      {imageUrl ? (
        <img src={imageUrl} alt="" />
      )  
       : (
        <PiImageThin className="text-8xl flex items-center justify-center text-[#666666] font-[400]" />
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
<p className="text-[#6D6D6D] py-1">URL Link</p>
<Form.Item
  name="url"
  rules={[
    {
      required: true,
      message: "Please input State Name",
    },
  ]}
>
  <Input
    className="w-[100%] border outline-none px-3 py-[10px]"
    type="text"
  />
</Form.Item>
</div> 



<Form.Item className="text-center mt-6">
<Button htmlType='submit' className="bg-[#07254A] px-6 py-3 w-full text-[#FEFEFE] rounded-md" style={{height:"45px"}}>
  Confirm
</Button>
</Form.Item>
</Form>
</div>


</Modal>
</div>
    );
};

export default AddContentModal;