import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import loginImg from "../../assets/Login.png"

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");

  const handleResendEmail = () => {
    const email = JSON.parse(localStorage.getItem("email"));

  };
  const handleVerifyOtp=()=>{
    Swal.fire({
      title: "Password Reset",
      text: "Your password has been successfully reset. click confirm to set a new password",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/update-password")
      }
    });
  }

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
    <div style={{width: "630px",  background: "#F0F0F0", borderRadius: "12px", padding: "90px 57px" , boxShadow:"20px"}}>
        <h1 style={{fontSize: "32px", color: " #333333", marginBottom: "13px", textAlign: "center"}}>Check your email</h1>
        <p style={{width: "380px", color: "#B8B8B8",  margin: "0 auto 0 auto"}}>
          We sent a reset link to <span style={{color: "#545454"}}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px",}}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#2B2A2A",
              outline: "none"
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          onClick={handleVerifyOtp}
              block
              htmlType="submit"
              style={{
                height: "52px",
                fontWeight: "400px",
                fontSize: "18px",
                color: "white",
                background: "#07254A",
                marginTop: "30px",
                border: "none",
                outline: "none",
                marginBottom: "20px"
              }}
            >
              Verify
        </Button>
        <p style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          Didn’t receive code?
          <p onClick={handleResendEmail} style={{color: "#1B4998", textDecoration: "underline", cursor: "pointer"}}>Resend </p>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Otp;
