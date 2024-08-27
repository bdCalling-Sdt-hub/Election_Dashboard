import { Button, Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useAddFaqMutation, useUpdateFaqMutation } from "../redux/apiSlices/DashboardSlice";
import Swal from "sweetalert2";

const FaqModal = ({ openAddModel, setOpenAddModel  ,modalData , refetch , setModalData}) => {   
  const [form] = Form.useForm()
  console.log(modalData);
  const [addFaq] = useAddFaqMutation() 
  const [updateFaq]= useUpdateFaqMutation() 
 
  useEffect(()=>{  
    if(modalData){
      form.setFieldsValue({question:modalData?.question , answer:modalData?.answer})
    }
    
  } ,[modalData])

  const onFinish =async(values)=>{
console.log(values);  
const data ={
  _id:modalData?._id ,
  question:values?.question ,
  answer:values?.answer
}

if(modalData){
await updateFaq(data).then((res)=>{
  console.log(res); 
  if(res?.data?.success){
    Swal.fire({
        text:res?.data?.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch();  
        setModalData(null)  
        form.resetFields() 
        setOpenAddModel(false);
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
  await addFaq(values).then((res)=>{
    console.log(res); 
    if(res?.data?.success){
      Swal.fire({
          text:res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          refetch();  
          setOpenAddModel(false); 
          setModalData(null)  
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
}
  }
  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => {setOpenAddModel(false)  
        setModalData(null)
        form.resetFields()
      }}
      width={500}
      footer={false}
    >
      <div className="p-6">
        <h1
          className=" text-[20px] font-medium"
          style={{ marginBottom: "12px" }}
        >
        {modalData?"Update FAQ" : "Add FAQ"}
        </h1>
        <Form onFinish={onFinish} form={form} layout="vertical">
          <Form.Item name="question" style={{ marginBottom: "16px" }} label={<p style={{ display: "block" }}>
              Question
            </p>}>
            
            <Input
              type="Text"
              placeholder="Enter Question"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
              }}
              
            />
          </Form.Item>
          <Form.Item name="answer" style={{ marginBottom: "16px" }} label={<p style={{ display: "block" }}>
              Answer
            </p>}>
            
            <Input.TextArea
              type="Text"
              placeholder="Enter answer"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "152px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                resize: "none",
              }}
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <Button
              className="cursor-pointer"
              htmlType="submit"
              block
              style={{
                border: "none",
                height: "44px",
                background: "#07254A",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                padding: "10px 20px",
              }}
          
            > Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default FaqModal;
