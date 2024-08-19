import { Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { PiImageThin } from "react-icons/pi";


const AddContentModal = ({open , setOpen}) => { 
    const [imgFile, setImgFile] = useState(null);
    const handleChange = (e) => {
      setImgFile(e.target.files[0]);
    };
    return (
        <div>
        <Modal
open={open}
onCancel={() => {setOpen(false)  , setImgFile(null);}}                   
centered
footer={false}          
width={500}
>  
<div className=' p-5'>
<Form>
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
  <Form.Item name="image">
    <div className="flex justify-center items-center w-full h-full   py-4">
      {imgFile ? (
        <img src={URL.createObjectURL(imgFile)} alt="" />
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



<div className="text-center mt-6">
<button className="bg-[#07254A] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
  Confirm
</button>
</div>
</Form>
</div>


</Modal>
</div>
    );
};

export default AddContentModal;