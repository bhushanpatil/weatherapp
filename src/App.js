import React, { Component } from 'react';
import './App.css';
import './pure.css';
import './roboto.css';

import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header /> 
        <Content />
      </div>
    );
  }
}

export default App;
