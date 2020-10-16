import React from 'react';
import logo from "./logo192.png";
import photo from "./photo.jpg";
import './App.css';

import ModalImage from "./ModalImage"
import Test from "./Test"

function App() {
  return (
    <div className="App">
      <ModalImage except={["App-logo1","test4 test"]} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={photo} className="App-logo" alt="logos" />
        <p>Test</p>
      </header>
      <Test/>
    </div>
  );
}

export default App;