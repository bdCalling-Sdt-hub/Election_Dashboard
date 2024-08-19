import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import loginImg from "../../assets/Login.png"
import "./style.css"
const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email))
    console.log("Received values of form: ", values.email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Send OTP ",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate("/otp")
    });
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
        className="password-form"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "630px",
          background: "#F0F0F0",
          borderRadius: "12px",
          padding: "90px 57px",
          position: "relative",
          
        }}
        
        onFinish={onFinish}
      >
        <h1 style={{fontSize: "32px", marginBottom: "54px", color: " #333333", textAlign: "center"}}>Forgot Password</h1>

          <div style={{marginBottom: "24px" , fontSize:"17px"}}>
            <label htmlFor="email" style={{display: "block", marginBottom: "5px" }}> Email Address</label>
            <Form.Item
              style={{marginBottom: 0}}
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                type="email"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}

              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
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
              }}
            >
              Send a Code
            </Button>
          </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default ForgotPassword;
