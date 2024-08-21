import { Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { PiImageThin } from "react-icons/pi";
const { Option } = Select; 

const AddCandidateModal = ({setOpen , open , modalData }) => { 
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
        <p className=' pb-3 text-lg font-[500]'> {modalData ? "Update Candidate" : "Add Candidate"}</p>
       <Form>
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
            <p className="text-[#6D6D6D] py-1"> Political Affiliation</p> 
            <Form.Item
        name="party"
        rules={[
          {
            required: true,
            message: 'Please select  Political Affiliation!',
          },
        ]}
      >
        <Select placeholder="select your Political Affiliation" style={{height:"45px"}}>
          <Option value="democratic ">Democratic Party</Option>
          <Option value="republican">Republican Party</Option>
          <Option value="libertarian">Libertarian Party</Option>
          <Option value="green">Green Party</Option>
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
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
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

export default AddCandidateModal;