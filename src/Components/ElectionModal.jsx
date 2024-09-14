import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAddElectionMutation, useUpdateElectionMutation } from '../redux/apiSlices/DashboardSlice';

const ElectionModal = ({open , setOpen , modalData , SetModalData , refetch}) => { 
    const [form] = Form.useForm()
    const [addElection ] = useAddElectionMutation() 
    const [updateElection] = useUpdateElectionMutation()  

    useEffect(()=>{ 
        if(modalData){
form.setFieldsValue({name:modalData?.name})
        }
    } ,[modalData])

const onFinish =async(values)=>{
    //console.log(values);  
    const data = {
        id:modalData?.id ,  
        name:values?.name
    }
    if(modalData?.id){ 

await updateElection(data).then((res)=>{
    if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            refetch();  
            SetModalData(null) 
            form.resetFields() 
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
    }else{
        await addElection(values).then((res)=>{
            if(res?.data?.success){
                Swal.fire({
                    text:res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    refetch();  
                   
                    setOpen(false); 
                    SetModalData(null)
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
        open={open}
        onCancel={() =>{ setOpen(false)
            SetModalData(null) 
            form.resetFields() 
        }}                   
        centered
        footer={false}          
        width={500} > 
        <Form layout='vertical' className=' p-5 pb-2' form={form} onFinish={onFinish}>  
        <p className=' pb-3 text-lg font-[500]'> {modalData ? "Update Election" : "Add Election"}</p>
        <Form.Item
         name="name"
         rules={[
           {
             required: true,
             message: "Please input State Name",
           },
         ]} 
         label={<p className="text-[#6D6D6D] ">Election Name</p>}
         
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
    );
};

export default ElectionModal;