import React, { Component } from 'react';

class TextInput extends Component {
  handleUpdate = (event) => {
    this.props.updateInput(event.target.value)
    console.log(event.target.value)
  }
  render() {
    return (
      <input
        type="text"
        className="form-control container col-6 mb-5"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default TextInput;
