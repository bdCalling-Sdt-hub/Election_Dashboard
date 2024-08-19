import React, { useRef, useState } from 'react';
import Title from '../../Shared/Title';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import JoditEditor from 'jodit-react';
const { Option } = Select; 
const AddCandidateIssues = () => { 
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [isLoading, seLoading] = useState(false);
  
    const config = {
      readonly: false,
      placeholder: "Start typings...",
      style: {
        height: 100,
      },
    };
    return (
        <div>
            <div className=' flex  gap-3 items-center'>
  <Link to="/candidate-details"  className='pt-2 flex items-center gap-1'>  <IoIosArrowRoundBack size={24}  /> <span>  Back </span> </Link>  
  <Title>Add Candidates Issues</Title>  
  </div> 


  <div className='w-[80%] mx-14'>
  <div className=' mt-5  bg-[#F0F0F0] rounded-xl p-8'>
<Form className=' w-full'> 
<div>
            <p className="text-[#6D6D6D] py-1 text-lg">Select Candidate </p> 
            <Form.Item
        name="candidate"
        rules={[
          {
            required: true,
            message: 'Please select Candidate!',
          },
        ]}
      >
        <Select placeholder="Select your Candidate" style={{height:"45px" , width:"75%"}}>
          <Option value="democratic ">Chose Oliver</Option>
          <Option value="republican">Joe Biden</Option>
          <Option value="libertarian">Donald Trump</Option>
          <Option value="green">Robert F. Kennedy Jr.</Option>
          <Option value="Others">Donald Trump</Option>
        </Select>
      </Form.Item>
            </div>  

            <div className='mb-5'>
                <p className='text-[#6D6D6D] py-1 text-lg'> Key Voter Issus(1)</p> 
                <Form.Item name="voterIssue1"> 
<Input style={{ height:"45px" , width:"75%"}} /> 
<div  className=' my-3'> 
<JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
 </div>
                </Form.Item>
            </div>  


            <div className='mb-5'>
                <p className='text-[#6D6D6D] py-1 text-lg'> Key Voter Issus(2)</p> 
                <Form.Item name="voterIssue1"> 
<Input style={{ height:"45px" , width:"75%"}} /> 
<div  className=' my-3'> 
<JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
 </div>
                </Form.Item>
            </div> 

            <div className=''>
                <p className='text-[#6D6D6D] py-1 text-lg'> Key Voter Issus(3)</p> 
                <Form.Item name="voterIssue1"> 
<Input style={{ height:"45px" , width:"75%"}} /> 
<div  className=' my-3'> 
<JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
 </div>
                </Form.Item>
            </div> 

<Form.Item className='text-end'> 
  <Button htmlType='submit' style={{
     backgroundColor:"#07254A" , 
     color:"white" ,
     height:"40px"
    
  }}> Submit

  </Button>
</Form.Item>

</Form>
  </div>
  </div>
 
       
        </div>
    );
};

export default AddCandidateIssues;