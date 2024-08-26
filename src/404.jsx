import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import NotFoundImg from "./assets/not-found.png" 
import loginImg from "./assets/notFound.png"

function NotFound() {
  return (
<div style={{
  position: "relative",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
  color: "#4C4C4C"
}}>
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${loginImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "grayscale(100%) brightness(0.3)",
    zIndex: -1
  }}>  </div>
  
  <p style={{fontSize: "90px", margin: "4px", fontWeight: 600, textAlign: "center", color: "white"}}> 404 Not Found</p>
  <p style={{fontSize: "20px",fontWeight: 400, textAlign: "center", color: "#F1F1F1"}}> Looks like you’ve got lost…. </p>
        <button className='text-white underline underline-offset-3  my-12'
    
        >
          <Link to="/">Back to Dashboard</Link>
        </button>

  </div> 
      

  )
}

export default NotFound