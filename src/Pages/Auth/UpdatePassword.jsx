import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import loginImg from "../../assets/Login.png" 
import "./style.css"
import {  useResetPassMutation } from "../../redux/apiSlices/AuthSlice";

const UpdatePassword = () => {
  const navigate = useNavigate(); 
  const [resetPass , {isError , isSuccess , error ,data}] = useResetPassMutation() 
  const email = JSON.parse(localStorage.getItem("email"));  

  useEffect(() => {
    if (isSuccess) {
      // //console.log("you login successfully");
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
        navigate("/")
          window.location.reload(); 
        });
      }
    }
    if (isError) {
      Swal.fire({
       
        text: error?.data?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, navigate]);  


  const onFinish = async(values) => {  
    const data = {
      email:email ,
      ...values
    } 
    //console.log(data);
//  //console.log(values);  
 await resetPass(data)
    // Swal.fire({
    //   title: "Successfully",
    //   text: "Your password has been updated, please change your password regularly to avoid this happening",
    //   showDenyButton: false,
    //   showCancelButton: false,
    //   confirmButtonText: "Confirm",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     navigate("/")
    //   }
    // });
  };

  return (
    <div className=" grid grid-cols-2">
    <div className=" col-span-1"
   style={{
    width: "100%",
    backgroundImage: `url(${loginImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    animation: "slidein 10s linear infinite alternate", 
  }}
    > 
    </div> 
    <div className=" col-span-1 flex justify-center items-center" >
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{width: "630px", background: "#F0F0F0", borderRadius: "12px", padding: "90px 57px"}}
        onFinish={onFinish} 
        layout="vertical"
      >
        <h1 style={{fontSize: "32px", color: "black", marginBottom: "13px", textAlign: "center" , fontWeight:500}}>Set a new password</h1>
       
    
        <div>
           
            <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
            style={{ marginBottom: "15px", marginTop: "20px" }}
            label={
              <p style={{display: "block", color:"#6A6D7C",  fontSize:"17px" }} htmlFor="">New Password</p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>
        </div>
    
        <div style={{marginBottom: "40px"}}>
          
            <Form.Item
            name="confirmPassword"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            style={{ marginBottom: "15px" }}
            label={
              <p style={{display: "block", color:"#6A6D7C", fontSize:"17px"}} htmlFor="email">Confirm Password</p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>

        </div> 

        <Form.Item className="text-center">
            <Button    type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#07254A",
                color: "white",
                alignSelf: "bottom",
                marginTop: "30px",
              }}>
              UPDATE
            </Button>
          </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default UpdatePassword;
