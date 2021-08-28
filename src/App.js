// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Button,Col, Input, Row,Space } from 'antd';
import 'antd/dist/antd.css';
import Login from "./login"

import './App.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';



function App  () {
 
   return(
  
  <div className="App">
    <nav>
      <Row className="nav-row" align='middle'>
        <Col xl={18} xs={24}><h3 className="first-word">ATools</h3></Col>
        <Col xl={6} xs={0}  >
          <Row className="nav-button" gutter={[10,10]}>
            <Col> <Button className="button-1" >Free Trail</Button></Col>
         
          
        <Col> <Button className="button-2" >Login</Button></Col> 
          </Row>
          
        </Col>
      </Row>
    </nav>
    <div>
      <Login/>
    </div>
   
  </div>
)};

export default App;