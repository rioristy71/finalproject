import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App(props) {
  return (
    <div className="App mr-2 btn-flat btn-xxl">
     <Button variant={props.gaya ? "primary":"flat"}>{props.children}</Button>{' '}
     
    </div>
  );
}

export default App;
