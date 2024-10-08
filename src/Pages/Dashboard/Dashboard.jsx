import { Input, Layout, Badge } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import person from "../../assets/person.png";

import {
  RiNotification2Line,
} from "react-icons/ri";
import { useGetProfileQuery } from "../../redux/apiSlices/AuthSlice";
import { imageUrl } from "../../redux/api/apislice";

const { Header, Sider, Content } = Layout;


const Dashboard = () => {
  const { pathname } = useLocation(); 
  const [image ,setImage] = useState(null) 
  const {data} = useGetProfileQuery()   
  const userInfo = data?.data
  //console.log(data); 
  const navigate = useNavigate();  

  useEffect(()=>{
    const imgUrl = userInfo?.image ? userInfo?.image.startsWith("https") ? userInfo?.image : `${imageUrl}${userInfo?.image}`   : person
    setImage(imgUrl)
   
     } ,[userInfo , setImage])
 


  const linkItems = [
    {
      title: "Donation History",
      path: "/",
    },
    {
      title: "Voters important issues",
      path: "/voters-issues",
    },
    {
      title: "Voters feedbacks",
      path: "/feedbacks",
    
    },
    {
      title: "Subscribers ",
      path: "/subscriber-details",
    
    }, 
    {
      title:"Add State" ,
      path:"/add-state"
    } ,
    {
      title:"Add Election" ,
      path:"/add-election"
    } ,
    {
      title: "Add Candidate",
      path: "/add-candidate",
    },
    {
      title: "Candidate Issues details",
      path: "/candidate-details",
    },
    {
      title: "About U.S. elections",
      path: "/about-elections",
     
    },

        {
          title: "FAQ",
          path: "/faq",
        }, 
        {
          title:"About Us" ,
          path:"/about"
        } ,  
        {
          title: "Privacy Policy",
          path: "/privacy",
        },
        {
          title: "Terms & Condition",
          path: "/terms",
        }, 
        {
          title: "Latest news",
          path: "/latest-news",
        }, 
    
   
    {
      title: "Log out",
      path: "/login",
    
    },
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="17vw"
        trigger={false}
        style={{
          position: "fixed",
          height: "calc(100vh - 2px)",
          paddingBottom: "60px",
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            width: "100%",
            // height: 60,
            padding: "0 0 20px 0",
          }}
        >
          <Link to="/">
            <img src={Logo} style={{height:"47px"  , width:"100%" }}  />
          </Link>
        </div>


        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            height: "100%",
            marginTop: 0,
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
             
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "white" : "#07254A",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#07254A" : "#EEEEEE",
                    width: "100%",
                    padding: "10px", 
                    paddingLeft:"20px" ,
                    borderRadius: "100px 0px 0px 100px",
                  }}
                >
                 
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content", 
                      fontWeight:500
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
            
            </li>
          )).slice(0,4)}  

          <p className=" border border-[#D9D9D9] ms-[40px]"></p> 

          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
             
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "white" : "#07254A",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#07254A" : "#EEEEEE",
                    width: "100%",
                    padding: "10px", 
                    paddingLeft:"20px" ,
                    borderRadius: "100px 0px 0px 100px",
                  }}
                >
                 
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content", 
                      fontWeight:500
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
            
            </li>
          )).slice(4,8)} 

<p className=" border border-[#D9D9D9] ms-[40px]"></p>  

{linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
             
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "white" : "#07254A",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#07254A" : "#EEEEEE",
                    width: "100%",
                    padding: "10px", 
                    paddingLeft:"20px" ,
                    borderRadius: "100px 0px 0px 100px",
                  }}
                >
                 
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content", 
                      fontWeight:500
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
            
            </li>
          )).slice(8,13)}  
<p className=" border border-[#D9D9D9] ms-[40px]"></p>   
{linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "40px",
              }}
            >
             
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "white" : "#07254A",
                    alignItems: "flex-end",
                    margin: "auto  0 auto 0",
                    gap: "14px",
                    background: item.path === pathname ? "#07254A" : "#EEEEEE",
                    width: "100%",
                    padding: "10px", 
                    paddingLeft:"20px" ,
                    borderRadius: "100px 0px 0px 100px",
                  }}
                >
                 
                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      height: "fit-content", 
                      fontWeight:500
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
            
            </li>
          )).slice(13,15)} 


        </ul>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "white",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "75px",
            paddingLeft: "17vw",
          }}
        >
          <div
            style={{
              width: "220px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              justifyContent: "space-between",
            }}
          >
           
            <Link
              to={"/admin-profile"}
              style={{
                height: "42px",
                cursor: "pointer",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px",
              }}
            >
              <img
                src={image}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "100%",
                  borderColor: "#2461CB",
                  borderWidth: 2,
                }}
                alt=""
              />
              <h2
                style={{
                  color: "#07254A",
                  fontSize: "16px",
                  fontWeight: "600",
                  width: 200,
                }}
              >
               {userInfo?.name}
              </h2>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "75px",
            marginBottom: "20px",
            marginLeft: "18%",
            marginRight: "40px",

            overflow: "auto",
            padding: "20px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
