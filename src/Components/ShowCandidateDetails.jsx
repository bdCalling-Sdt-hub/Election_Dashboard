import { Modal } from 'antd';
import React from 'react';
const ShowCandidateDetails = ({setShowDetails , showDetails , modalData}) => { 
    console.log(modalData);
    return (
        <div>
                  <Modal
        open={showDetails}
        onCancel={() => {setShowDetails(false) }}                   
        centered
        footer={false}          
        width={500}
      >  
      
      <div className=' p-8'> 
     <div className='flex justify-center items-center'>
     <img src={modalData?.candidate?.img} className=' h-[100px] w-[140px] rounded-lg  ' alt="" /> 
     </div> 
 
        <div className="p-6 flex flex-col   gap-2 pt-8">
          <div className="flex items-center gap-5 w-full ">
            <p className="text-[#000000] text-sm ">Candidate Name: </p>
            <p className="text-[#5C5C5C] text-sm font-medium ">{modalData?.candidate?.name}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-[#000000] text-sm ">Political Affiliation:</p>
            <p className="text-[#5C5C5C] text-sm font-medium ">{modalData?.party}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-[#000000] text-sm ">Candidate State:</p>
            <p className="text-[#5C5C5C] text-sm font-medium ">{modalData?.state}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-[#000000] text-sm ">Election Name:</p>
            <p className="text-[#5C5C5C] text-sm font-medium ">{modalData?.election}</p>
          </div>
        
        </div>
      </div>
       </Modal>
        </div>
    );
};

export default ShowCandidateDetails;