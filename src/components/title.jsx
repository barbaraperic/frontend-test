import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
    color: "red"
    };
  }

  handleClick = () => {
    const url = 'http://www.colr.org/json/color/random';

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.setState ({
        color: `#${data.new_color}`
      });
    });
  }

  render () {
    return (
      // BUILD AND RETURN HTML COMPONENT
      <div onClick={this.handleClick} style={{color: `${this.state.color}`}}>
        Change the color
      </div>
      );
  }
}

export default Title;
