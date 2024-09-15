import { Modal } from 'antd';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const VoterIssuesModal = ({open , setOpen ,modalData}) => { 
  //console.log(modalData);
    return (
        <div>
           <Modal
        open={open}
        onCancel={() => setOpen(false)}                   
        centered
        footer={false}          
        width={500}
      >
        <div className='p-6'>
            <p className='text-xl font-semibold text-black mb-3'>Help us understand you better </p>
      
          <div className='flex items-center gap-3 text-[#666666]'>  
            <div> 
            <div className=' w-full flex '>
              <p className='w-1/2 text-sm font-semibold mb-1'>State:</p>
              <p className=' w-1/2 text-sm text-start'>{modalData?.state}</p>
            </div>                

            <div  className=' w-full flex my-2'>
              <p  className='w-1/2 text-sm font-semibold mb-1'>Age:</p>
              <p  className=' w-1/2 text-sm text-start'>{modalData?.dob}</p>
            </div> 

            <div  className=' w-full'>
              <p  className='w-1/2 text-sm font-semibold mb-1'>Issues:</p> 
               {
                modalData?.issues?.map((value , index)=>  <p key={index}  className='  text-sm flex items-center  gap-1 leading-7'> <span><GoDotFill /></span> <span>{value}</span></p>)
               }
             
            </div>
                
            </div>
            
            <div> </div>
          </div>
        </div>
      </Modal> 
        </div>
    );
};

export default VoterIssuesModal;