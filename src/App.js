import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./component/Timer/Timer";
import Greetings from "./component/Greetings/Greetings";
import Feeling from './component/Feeling/Feeling';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Timer />
        <Greetings />       
        <Feeling /> 
      </header>
    </div>
  );
}

export default App;
