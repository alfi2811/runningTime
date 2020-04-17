import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./component/Timer/Timer";
import Greetings from "./component/Greetings/Greetings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Greetings />        
      </header>
    </div>
  );
}

export default App;
