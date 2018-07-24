import React, { Component } from 'react';
import ball from './ball.png';
import Pitch from '../pitch/Pitch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ball} className="App-logo" alt="logo" />
          <h1 className="App-title">Football App</h1>
        </header>
        <Pitch></Pitch>
      </div>
    );
  }
}

export default App;
