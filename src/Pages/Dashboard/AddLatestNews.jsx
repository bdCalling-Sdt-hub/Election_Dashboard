import React, { useRef, useState } from 'react';
import Title from '../../Shared/Title'; 
import JoditEditor from "jodit-react";
import { Form, Input } from 'antd';
import { PiImageThin } from 'react-icons/pi';

const AddLatestNews = () => { 
    const [imgFile, setImgFile] = useState(null);
    const handleChange = (e) => {
      setImgFile(e.target.files[0]);
    }; 
    const editor = useRef(null);
    const [content, setContent] = useState("");
  
    const config = {
      readonly: false,
      placeholder: "Start typings...",
      style: {
        height: 400,
      },
    };  
    return (
        <div>
            <Title className="">Add latest news</Title>  
            <Form className='w-2/3 my-4 ' layout='vertical'>  
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
              
                <Form.Item name="image" >
                  <div className="flex justify-center items-center w-full h-full   py-4">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
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
          
            </Form> 

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
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: 44,
            width: "20%",
            backgroundColor: "#07254A",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </button>
      </div>
        </div>
    );
};

export default AddLatestNews;