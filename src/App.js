import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import List from './components/list';
import TextInput from './components/text_input'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputResult: "Default message"
    }
  }

  updateInput = (new_message) => {
    this.setState({ inputResult: new_message});
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <TextInput updateInput={this.updateInput}/>
          <Title message={this.state.inputResult}/>
          <List />
        </div>
      </div>
      );
  }
}

export default App;
