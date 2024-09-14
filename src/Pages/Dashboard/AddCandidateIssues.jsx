import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Shared/Title';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import JoditEditor from 'jodit-react';
import { useCandidateIssuesMutation, useGetCandidateQuery } from '../../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';
const { Option } = Select; 
const AddCandidateIssues = () => { 
  
    const [candidateInfo , setCandidateInfo]=useState(null) 

    const {data:candidate , refetch} = useGetCandidateQuery({})    
    //console.log(candidate);
    const [candidateIssues] = useCandidateIssuesMutation()

    const location = useLocation(); 
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const value = queryParams.get('value');
    const newsValue = value ? JSON.parse(decodeURIComponent(value)) : null;   
    //console.log(newsValue);

    const [issues, setIssues] = useState([
      { question: '', answer: '' },
      { question: '', answer: '' },
      { question: '', answer: '' }
    ]); 


    useEffect(()=>{ 
      if(newsValue){
        setIssues(newsValue?.issues)      
      }
    },[])  
  
    const editorRefs = useRef([]);
  
    const handleInputChange = (index, value) => {
      const updatedIssues = [...issues];
      updatedIssues[index].question = value;
      setIssues(updatedIssues);
    };
  
    const handleEditorChange = (index, newContent) => {
      const updatedIssues = [...issues];
      updatedIssues[index].answer = newContent;
      setIssues(updatedIssues);
    };

    // candidate id  
    const handleSelectChange =(id)=>{ 
      const selectedCandidate = candidate?.data?.find(candidate => candidate._id === id); 
      setCandidateInfo(selectedCandidate)
    } 

    const onFinish=async(values)=>{ 
      const id = newsValue?.id || candidateInfo?._id 
      const value ={
        issues:issues
      }
    await candidateIssues({id ,value }).then((res)=>{
      if(res?.data?.success){
        Swal.fire({
            text:res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/candidate-details")  
            window.location.reload()
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
  
  
    return (
        <div>
            <div className=' flex  gap-3 items-center'>
  <Link to="/candidate-details"  className='pt-2 flex items-center gap-1'>  <IoIosArrowRoundBack size={24}  /> <span>  Back </span> </Link>  
  <Title>{newsValue?"Update Candidates Issues":"Add Candidates Issues"}</Title>  
  </div> 


  <div className='w-[80%] '>
  <div className=' mt-5  bg-[#F0F0F0] rounded-xl p-8'>
<Form className=' w-full' onFinish={onFinish} > 
<div>
            <p className="text-[#6D6D6D] py-1 text-lg">Select Candidate </p> 
            <Form.Item
        name="candidate"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please select Candidate!',
        //   },
        // ]}
      >
        <Select placeholder="Select your Candidate" disabled={newsValue?.id} style={{height:"45px" , width:"75%"}} onChange={handleSelectChange} defaultValue={newsValue? newsValue?.candidate?.name : null} > 
          {
            candidate?.data?.map((value , index)=><Option  key={index} value={value?._id} >{value?.name}</Option>)
          }

        </Select>
      </Form.Item>
            </div>   

            {[...Array(3)].map((_, index) => (
        <div key={index} className="mb-5">
          <p className="text-[#6D6D6D] py-1 text-lg">Key Voter Issues ({index + 1})</p>
          <Form.Item name={`voterIssue${index + 1}`}>
            <Input
              style={{ height: '45px', width: '75%' }}
              value={issues[index].question}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Enter the issue (e.g., On Climate Change)"
            />
            <div className="my-3">
              <JoditEditor
                ref={(el) => (editorRefs.current[index] = el)}
                value={issues[index].answer}
                // config={{ readonly: false }}
                tabIndex={1}
                onBlur={(newContent) => handleEditorChange(index, newContent)}
                onChange={() => {}}
              />
            </div>
          </Form.Item>
        </div>
      ))}


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