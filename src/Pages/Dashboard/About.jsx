import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Shared/Title'; 
import JoditEditor from "jodit-react";
import { useGetAboutQuery, useUpdateAboutMutation } from '../../redux/apiSlices/DashboardSlice';
import Swal from 'sweetalert2';


const About = () => { 

    const editor = useRef(null);
    const [content, setContent] = useState(""); 
    const {data:about , refetch} = useGetAboutQuery() 
    const [updateAbout] =useUpdateAboutMutation()
   
useEffect(()=>{
  setContent(about?.data?.content)
} ,[about?.data?.content])

    const config = {
      readonly: false, 
      uploader: {
        insertImageAsBase64URI: true,
    },
      placeholder: "Start typings...",
      style: {
        height: 400,
      },
    };  

    const handleSubmit =async()=>{
      await updateAbout({content:content}).then((res)=>{
        if(res?.data?.success){
          Swal.fire({
              text:res?.data?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
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
            <Title className="">About Us</Title>  
           

            <div> 
        
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
        <button onClick={()=>handleSubmit()}
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

export default About;