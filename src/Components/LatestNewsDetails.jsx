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
        width={680}
      > 
      <div className=' p-5'>
        <img src={modalData?.image} style={{ width:"100%" , height:"200px" , marginTop:"20px" , borderRadius:"10px"}} alt="" /> 
        <p className=' text-[16px] font-[500] py-2'>  {modalData?.title}</p> 
        <p className=' text-[16px] py-2'> libero, Donec non. quis id elementum non commodo placerat convallis. Morbi amet, non in maximus odio faucibus amet, urna. risus elit. laoreet risus quis urna Nam orci lorem. ullamcorper nisl. Quisque lobortis, non, eget turpis non Nullam </p> 

        <p className=' text-[16px] py-2'> libero, Donec non. quis id elementum non commodo placerat convallis. Morbi amet, non in maximus odio faucibus amet, urna. risus elit. laoreet risus quis urna Nam orci lorem. ullamcorper nisl. Quisque lobortis, non, eget turpis non Nullam </p> 

        <p className=' text-[16px] py-2'> libero, Donec non. quis id elementum non commodo placerat convallis. Morbi amet, non in maximus odio faucibus amet, urna. risus elit. laoreet risus quis urna Nam orci lorem. ullamcorper nisl. Quisque lobortis, non, eget turpis non Nullam </p>
      </div>
            </Modal>
        </div>
    );
};

export default LatestNewsDetails;