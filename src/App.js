import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/title';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    colors: []
    };
  }

   componentDidMount() {
    fetch('http://www.colr.org/json/color/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ colors: data })
      console.log(this.state.colors)
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="App-header">
          <Title />
      </div>
    );
  }
}

export default App;
