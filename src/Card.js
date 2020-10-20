import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import Card from 'react-bootstrap/Card';



const imageb ='https://i.ibb.co/XJ6Hyd2/Oreti.png'
// const divStyle = {
//   backgroundColor: 'blue',
// };
function App() {
  return (
    <div className="App ">
         <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
<Card style={{backgroundColor:'rgba(121, 113, 234, 1)',backgroundPosition: 'right',backgroundImage: `url(${imageb})`,backgroundRepeat: 'no-repeat',height:300}}>
  <br></br>
  <br></br>
  <h1 style={{color:"black",fontWeight:"bold"}}>So what are you waiting for?</h1>

  <br></br>
  <p>
    <Button gaya={true}>JOIN NOW</Button>
  </p>
</Card>

    </div>
  );
}

export default App;