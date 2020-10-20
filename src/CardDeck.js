import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const object = [{
  name1: 'NETFLIX',
  image1: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
  name2: 'DISNEY',
  image2: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
  name3: 'HBO MAX',
  image3: 'https://www.logo.wine/a/logo/HBO_Max/HBO_Max-Logo.wine.svg',
  name4: 'Prime Video',
  image4: 'https://www.logo.wine/a/logo/Prime_Video/Prime_Video-Logo.wine.svg',
}
// , {
//   name1: 'netflix',
//   image1: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name2: 'HOOD',
//   image2: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name3: 'SPOTIFY',
//   image3: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name4: 'netflix',
//   image4: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
// },{
//   name1: 'netflix',
//   image1: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name2: 'HOOD',
//   image2: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name3: 'SPOTIFY',
//   image3: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
//   name4: 'netflix',
//   image4: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
// },
]
function App() {
    return (
      <div className="App ">
               <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      {object.map((item)=>(

        <CardDeck>
    <Card>
    <Card.Img variant="top" src={item.image1}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center'}}>{item.name1}</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={item.image2}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center'}}>{item.name2}</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={item.image3}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center'}}>{item.name3}</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={item.image4}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center'}}>{item.name4}</Card.Title>
    </Card.Body>
    </Card>
    </CardDeck>
    
      ))}
     
  
  
      </div>
    );
  }
 
  export default App;
