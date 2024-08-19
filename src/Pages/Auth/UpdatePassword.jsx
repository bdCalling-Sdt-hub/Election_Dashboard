import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import loginImg from "../../assets/Login.png" 
import "./style.css"

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [curPassError, setCurPassError] = useState("");
  const [err, setErr] = useState("");
  const onFinish = (values) => {
    const { password, confirmPassword } = values;
    Swal.fire({
      title: "Successfully",
      text: "Your password has been updated, please change your password regularly to avoid this happening",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/")
      }
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
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{width: "630px", background: "#F0F0F0", borderRadius: "12px", padding: "90px 57px"}}
        onFinish={onFinish}
      >
        <h1 style={{fontSize: "32px", color: "black", marginBottom: "13px", textAlign: "center" , fontWeight:500}}>Set a new password</h1>
        <p style={{ color: "#6A6D7C", fontSize: "14px", fontWeight: 400,  margin: "0 auto 0 auto"}}>
          Create a new password. Ensure it differs from
          previous ones for security
        </p>
    
        <div style={{margin: "45px 0 20px 0"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "5px", fontSize:"17px" }} htmlFor="">New Password</label>
            <Form.Item
                name="new_password"
                rules={[
                    {
                    required: true,
                    message: "Please input your new Password!",
                    },
                ]}
                style={{marginBottom: 0}}
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
                    }}
                />
            </Form.Item>
            { newPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{newPassError}</label>}
        </div>
    
        <div style={{marginBottom: "40px"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "5px" , fontSize:"17px"}} htmlFor="email">Confirm Password</label>
            <Form.Item
                style={{marginBottom: 0}}
                name="confirm_password"
                rules={[
                    {
                    required: true,
                    message: "Please input your Confirm Password!",
                    },
                ]}
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
                    }}
                />
            </Form.Item>
            { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "51px",
              background: "#07254A",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              marginTop: ""
            }}
          >
            UPDATE
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default UpdatePassword;
