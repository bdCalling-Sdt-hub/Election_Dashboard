import { Modal } from 'antd';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
const ShowCandidateDetails = ({setShowDetails , showDetails , modalData}) => { 
    //console.log(modalData);
    return (
        <div>
                  <Modal
        open={showDetails}
        onCancel={() => {setShowDetails(false) }}                   
        centered
        footer={false}          
        width={400}
      >  
      
      <div className=' p-8'> 
     <div className='flex justify-center items-center'>
     <img src={modalData?.candidate?.img} className=' h-[100px] w-[100px] rounded-lg  ' alt="" /> 
     </div> 
 
        <div className="flex flex-col   gap-2 pt-8">
          <div className="flex items-center gap-5 w-full ">
            <p className="text-[#000000] text-sm ">Candidate Name: </p>
            <p className="text-[#5C5C5C] text-sm font-medium ">{modalData?.candidate?.name}</p>
          </div>
          <div className=" w-full flex gap-5 items-center">
            <p className="text-[#000000] text-sm ">Political Affiliation:</p>
            <p className="text-[#5C5C5C] text-sm font-medium w-1/2">{modalData?.party}</p>
          </div>
          <div className="w-full flex gap-5 items-center">
            <p className="text-[#000000] text-sm ">Candidate State:</p>
            <p className="text-[#5C5C5C] text-sm font-medium w-1/2 ">{modalData?.state}</p>
          </div>
     

          <div  className=' w-full flex gap-1 '>
              <p  className=' text-sm font-semibold mb-1'>Issues:</p>  
              <p> 
              { 
modalData?.issues?.length === 0 ? "No Issues" :  modalData?.issues?.map((value , index)=>  <p key={index}  className='  text-sm flex items-center  gap-1 '> <span><GoDotFill /></span> <span>{value?.question}</span></p>)
               }
              </p>
              
             
            </div>
        
        </div>
      </div>
       </Modal>
        </div>
    );
};

export default ShowCandidateDetails;