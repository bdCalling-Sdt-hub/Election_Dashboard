import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import Title from "../../Shared/Title";
import { useGetPrivacyQuery, useUpdatePrivacyMutation } from "../../redux/apiSlices/DashboardSlice";

const Privacy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(""); 
  const {data:privacy , refetch} = useGetPrivacyQuery()  
  const [updatePrivacy] = useUpdatePrivacyMutation()
  console.log(privacy);
 
useEffect(()=>{ 
   
  setContent(privacy?.data?.content )
} ,[privacy?.data?.content]) 

const handleSubmit =async()=>{
await updatePrivacy({content:content}).then((res)=>{
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

  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 400,
    },
  };
  return (
    <>
        <Title className="mb-5">Privacy Policy</Title>
    

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
    </>
  );
};

export default Privacy;
