import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './containers/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input />
       
      </header>
    </div>
  );
}

export default App;
