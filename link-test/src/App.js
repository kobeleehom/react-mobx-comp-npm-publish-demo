import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactComp from 'react-comp';

class App extends Component {
  render() {
    const placeholder = "please input something ..."

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1>Demo of react-comp by npm link</h1>

        <ReactComp placeholder={placeholder}/>
      </div>
    );
  }
}

export default App;
