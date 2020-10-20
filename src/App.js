import React from 'react';
// import logo from './logo.svg';
import './App.css';



// import Button from './Button'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import CardDeck from './CardDeck'
import Card from './Card'
function App() {
  return (
    <div className="App">
     <Navbar/>
    <Jumbotron />
     {/* <Button gaya={true}>APP</Button> */}
     <CardDeck />
     <Card />
    </div>
  );
}

export default App;
