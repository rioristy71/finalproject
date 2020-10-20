import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import Jumbotron from 'react-bootstrap/Jumbotron';



const imageb ='https://i.ibb.co/XJ6Hyd2/Oreti.png'
// const divStyle = {
//   backgroundColor: 'blue',
// };
function App() {
  return (
    <div className="App ">
<Jumbotron  style={{backgroundColor:'rgba(121, 113, 234, 1)',backgroundPosition: 'right',backgroundImage: `url(${imageb})`,backgroundRepeat: 'no-repeat',height:700}}>
  
  <h1 style={{color:"white",fontWeight:"bold"}}>Stress Free </h1>
  <h1 style={{color:"white",fontWeight:"bold"}}>Subscription </h1>
  <h1 style={{color:"white",fontWeight:"bold"}}>Manager.</h1>
  <br></br>
  <p>
    <Button gaya={true}>JOIN NOW</Button>
  </p>
</Jumbotron>

    </div>
  );
}

export default App;