import React, { useState } from 'react';
import { Alert, Button,Col, Input, Row,Space } from 'antd';
import 'antd/dist/antd.css';

import './App.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';


export default function Login(){
  const [error,setError]=useState("");
    const [user,setUser]=useState({
        email:"",
        password:"",
      })
      const handleInput=(e)=>{
      const{name,value}=e.target;
      // console.log(e.target)
      // console.log( "nameis",name,"value is",value)
      setUser({
        ...user,
        
        [name]:value,
        
      })
      
      }
    
      const userLogin=()=>{
        fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            
          },
          body:JSON.stringify(user)
    
        })
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
          localStorage.setItem("token",data.token)
         
           const error1=data.error;
          //  console.log("my", error1)
           setError(error1);
           
         
          
         
        })
      }
    return(
        <div>
        <Row className="login-page" gutter={[40,0]}>
          <Col xl={8} lg={8} xs={20} className="login-col">
            
           <h2 className="login-text">Welcome Back</h2>
           <p className="login-para">Sub-title text goes here </p>
           <Col xl={24} xs={24}><Input  type="email" size="large" placeholder="Email Adress" name="email" onChange={handleInput} value={user.email} /></Col>
           
           <Col xl={24} xs={24}> <Input type="password" size="large" placeholder="password" name="password" value={user.password} onChange={handleInput} /></Col>
           <Col xl={24} xs={24}><Button size="large" className="login-button" onClick={userLogin}>Login</Button></Col>
           <Row className="password-box">
             <Col>
           <Checkbox><span className="login-check">Remember password</span></Checkbox>
           </Col>
           <Col >
           <span className="login-check">forget password?</span>
           </Col>
           </Row>
           <p className="showerror">{error}</p>
           
          </Col>
          
          <Col xl={12} xs={0}>
          <img src="https://image.freepik.com/free-vector/people-team-analytics-monitoring-web-report-dashboard-monitor_115495-203.jpg" alt="image"/>
  
          </Col>
        </Row>
      </div>
    )
}