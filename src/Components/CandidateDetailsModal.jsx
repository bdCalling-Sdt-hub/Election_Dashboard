import { Collapse, Modal } from 'antd';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const CandidateDetailsModal = ({open , setOpen , modalData}) => { 
    //console.log(modalData);
    return (
        <div>
                 <Modal
open={open}
onCancel={() => {setOpen(false)}}                   
centered
footer={false}          
width={700}
>  
<div className=' p-8'> 
    <p className=' font-semibold text-2xl py-3'>Candidate Issues details</p>
<div className=' flex items-center justify-between w-full'> 
    <div className=' w-1/3 flex flex-col items-center justify-center'>
        <img src={modalData?.candidate?.img} style={{ height:"120px" , width:"120px" , borderRadius:"100%"}} alt="" /> 
        <p className=' font-medium text-xl py-2'>{modalData?.candidate?.name}</p>
    </div> 
    <div className='w-2/3'> 
    <div className=' mb-2 text-[#525252]'>
    {modalData?.issues?.map((value, index) => (
        <Collapse
          key={index}  
          expandIconPosition='end'
          ghost
          defaultActiveKey={['0']} 
          items={[
            {
              key: index.toString(),
              label: <p className='  text-sm  font-medium ' dangerouslySetInnerHTML={{ __html:value?.question}} > 
          </p>,
              children: <div className=' border border-dashed border-[#bbb9b9] rounded-xl p-3 bg-[#f3f2f2] '> 
              {/* <p className=' pb-2'>Candidate <span className='bg-[#8f8d8d] text-white px-1 me-1'> Issues details </span> Lorem dolor sit amet.</p>   */}
            
              <p  dangerouslySetInnerHTML={{ __html:value?.answer}}></p>
               
                </div>
            }
          ]}
        />
      ))}
    </div>
    
    </div>

 </div>
</div>


  </Modal>
        </div>
    );
};

export default CandidateDetailsModal;