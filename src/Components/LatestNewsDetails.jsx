import { Modal } from 'antd';
import React from 'react';

const LatestNewsDetails = ({open , setOpen , modalData}) => {
    return (
        <div>
                  <Modal
        open={open}
        onCancel={() => setOpen(false)}                   
        centered
        footer={false}          
        width={450}
      > 
      <div className=' p-5'>
        <img src={modalData?.image} style={{ width:"100%" , height:"200px" , marginTop:"20px" , borderRadius:"20px"  , objectFit:"contain" , objectPosition:"center" }} alt="" /> 
        <p className=' text-[16px] font-[500] py-2'>  {modalData?.title}</p> 
        <p className=' text-[16px] py-2'  dangerouslySetInnerHTML={{ __html: modalData?.description }}></p> 
      </div>
            </Modal>
        </div>
    );
};

export default LatestNewsDetails;