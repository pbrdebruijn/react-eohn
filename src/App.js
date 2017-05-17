import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Time from './component/Time';
import Stopwatch from './component/Stopwatch';
import Logo from './component/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h3>It is now now <Time/></h3>
        <p className="App-intro">
          We have created a FrankenWatch
        </p>
        <Stopwatch/>
      </div>
    );
  }
}

export default App;
