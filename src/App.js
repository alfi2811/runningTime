import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">      
      <header className="App-header">        
        <div className="App-content">
          <NavBar />
        </div>
        <Home />
      </header>
    </div>
  );
}

export default App;
