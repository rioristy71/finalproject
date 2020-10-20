import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from './Button';

function App() {
  return (
    <div className="App ">
  <Navbar style={{padding:30}}>
  <Navbar.Brand href="#home"style={{color:"black",fontWeight:"bold"}}>Fund</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
    <Button >PRUDUCT</Button>
      <Button >ABOUT</Button>
      <Button >LOGIN</Button>
      <Button gaya={true} >SIGN UP</Button>
    
     
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default App;