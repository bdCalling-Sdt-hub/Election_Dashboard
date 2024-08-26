
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router"; 
import loginImg from "../../assets/Login.png" 
import "./style.css"
import { useLoginMutation } from "../../redux/apiSlices/AuthSlice";
import { setToLocalStorage } from "../../Util/local-stroage";
import Swal from "sweetalert2";
const Login = () => { 
  const [login , {isSuccess , isError , data , error }] = useLoginMutation()    
  console.log(error);
  console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      // console.log("you login successfully");
      if (data) {
        Swal.fire({
          title: "Login Successful",
          text: "Welcome to Admin Dashboard",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          setToLocalStorage("electionToken", data?.data);  

          navigate("/");  
          window.location.reload();
        });
      }

    }
    if (isError) {
      Swal.fire({
        title: "Failed to Login",
        text: error?.data?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, navigate]); 


  const onFinish = async(values) => {
    await login(values).then((res)=>{ 
      console.log(res);
    })
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
        className="login-form "
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
        <h1 style={{ fontSize: "32px", color: "black", textAlign: "center" , fontWeight:500 , marginBottom:"10px" }}>
          Login in to Account
        </h1>
        <div style={{ marginBottom: "24px", fontSize:"17px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            {" "}
            Email{" "}
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
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

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" , fontSize:"17px"}}
            htmlFor="password"
          >
            Password
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "#6A6D7C", fontSize:"17px" }}>Remember me</Checkbox>
          </Form.Item>
          <a
            className="login-form-forgot"
            style={{ color: "#6A6D7C" , fontSize:"17px"}}
            href="/forgot-password"
          >
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button 
          // onClick={()=>navigate('/')} 
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            style={{
              height: "52px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#07254A",
              marginTop: "56px",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>

  );
};

export default Login;
