import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import List from './components/list';

const App = () => {
    return (
      <div>
        <div className="App-header">
          <Title />
          <List />
        </div>
      </div>
    );
  }

export default App;
