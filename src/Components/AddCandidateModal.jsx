import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { PiImageThin } from "react-icons/pi";
import { useAddCandidateMutation, useGetElectionQuery, useGetStateQuery, useUpdateCandidateMutation } from '../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';
const { Option } = Select; 

const AddCandidateModal = ({setOpen , open , modalData ,setModalData , refetch }) => {    
  const [addCandidate] = useAddCandidateMutation() 
  const [updateCandidate] = useUpdateCandidateMutation() 
  const {data:state} = useGetStateQuery() 
  const {data:election} = useGetElectionQuery()  
  const [form] = Form.useForm()
    const [imgFile, setImgFile] = useState(null); 
    const [imageUrl , setImageUrl] = useState() 

    const handleChange = (e) => { 
      const file = e.target.files[0] 
      //console.log(file);
      setImgFile(file); 
      setImageUrl(URL.createObjectURL(file))
    };  

    useEffect(()=>{ 
      if(modalData){
        form.setFieldsValue({name:modalData?.candidate?.name , politicalAffiliation:modalData?.party , state:modalData?.state , election:modalData?.election}) 
        setImageUrl(modalData?.candidate?.img)    
      }
    },[modalData , form])

    const onFinish =async(values)=>{ 
      const formdata = new FormData()  
      //console.log(imgFile);  
    const {imagess , ...otherValues} = values
      if(imgFile){
        formdata.append("image" ,imgFile)
      } 
      Object.entries(otherValues).forEach(([field , value])=>{
    formdata.append(field , value)
      })   
const id= modalData?.id

      if(modalData?.id){
await updateCandidate({id, formdata }).then(res=>{
  // //console.log(res); 
  if(res?.data?.success){
    Swal.fire({
        text:res?.data?.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch();  
        setModalData(null)  
        setImageUrl(null) 
        setImgFile(null)
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
         await addCandidate(formdata).then((res)=>{
          // //console.log(res); 
          if(res?.data?.success){
            Swal.fire({
                text:res?.data?.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                refetch();  
                setImageUrl(null) 
                setImgFile(null)
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
      }
    }
    return (
        <div>
                      <Modal
        open={open}
        onCancel={() => {setOpen(false)  , setImageUrl(null) , setModalData(null)  , form.resetFields()}}                   
        centered
        footer={false}          
        width={500}
      >  
       <div className=' p-5'> 
        <p className=' pb-3 text-lg font-[500]'> {modalData ? "Update Candidate" : "Add Candidate"}</p>
       <Form onFinish={onFinish} form={form}>
            <div>
              <p className="text-[#6D6D6D] py-1">Candidate Name</p>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input Candidate Name",
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
              <p className="text-[#6D6D6D] py-1">Candidate Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border rounded-lg"
              >
                <Form.Item name="imagess"  
                // rules={[
                //         {
                //             required: true,
                //             validator: () => {
                //                 if (!imageUrl || !imgFile) {
                //                   return Promise.reject("Please select a Image");
                //                 }
                //                 return Promise.resolve();
                //             }
                //         }
                //     ]}  
                    >
                  <div className="flex justify-center items-center w-full h-[200px] ">
                    {imageUrl ? (
                      <img src={imageUrl} style={{ height:"200px"}} alt="" />
                    ) 
                    //  : itemForEdit?.category_image ? (
                    //   <img src={`${ServerUrl}${itemForEdit?.category_image}`} alt="" />
                    // ) 
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
            <p className="text-[#6D6D6D] py-1"> Political Affiliation</p> 
            <Form.Item
        name="politicalAffiliation"
        rules={[
          {
            required: true,
            message: 'Please select  Political Affiliation!',
          },
        ]}
      >
        <Select placeholder="select your Political Affiliation" style={{height:"45px"}}>
          <Option value="Democratic">Democratic Party</Option>
          <Option value="Republican">Republican Party</Option>
          <Option value="Libertarian">Libertarian Party</Option>
          <Option value="Green">Green Party </Option>
          <Option value="Others">Others</Option>
        </Select>
      </Form.Item>
            </div> 

            <div>
              <p className="text-[#6D6D6D] py-1">State</p>
              <Form.Item
                name="state"
                rules={[
                  {
                    required: true,
                    message: "Please input State Name",
                  },
                ]}
              >
                    <Select placeholder="select your state" style={{height:"45px"}}> 
                      {
                        state?.data?.map((value )=><Option key={value?._id} value={value?.name}>{value?.name}</Option>)
                      }
          
        </Select> 
              </Form.Item>
            </div> 

            
            <div>
              <p className="text-[#6D6D6D] py-1">Election</p>
              <Form.Item
                name="election"
                rules={[
                  {
                    required: true,
                    message: "Please input Election Field",
                  },
                ]}
              >
                <Select placeholder="select your Election" style={{height:"45px"}}> 
                      {
                        election?.data?.map((value )=><Option key={value?._id} value={value?.name}>{value?.name}</Option>)
                      }
          
        </Select> 
              </Form.Item>
            </div> 



            <Form.Item className="text-center mt-6">
              <Button htmlType='submit' className="bg-[#07254A]  w-full text-[#FEFEFE] rounded-md" style={{ height:"45px"}}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
       </div>
  
      
       </Modal>
        </div>
    );
};

export default AddCandidateModal;