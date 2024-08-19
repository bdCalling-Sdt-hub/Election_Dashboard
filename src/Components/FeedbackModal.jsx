import { Form, Input, Modal } from 'antd';
import React from 'react';

const FeedbackModal = ({open , setOpen , modalData}) => {
    return (
        <div>
               <Modal
        open={open}
        onCancel={() => setOpen(false)}                   
        centered
        footer={false}          
        width={500}
      >  
     <div  className='p-8'>
  
     <Form layout='vertical' initialValues={ { 
       feedback: modalData?.feedback
      } }> 
        <Form.Item name="feedback" label={<p className='text-lg text-black '>Feedback:</p>}> 
 <Input.TextArea rows={5}  className=' resize-none ' readOnly/>
        </Form.Item>
     </Form>
     </div>
      </Modal>
        </div>
    );
};

export default FeedbackModal;