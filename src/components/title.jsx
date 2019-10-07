import React, { Component } from 'react';
import getNewColor from '../getNewColor';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
    clicked: false
    };
  }

  handleClick = () => {
  this.setState ({
    clicked: !this.state.clicked
  });

  getNewColor()

  }
  render () {
    return (
      // BUILD AND RETURN HTML COMPONENT
      <div className={this.state.clicked ? 'clicked' : null } onClick={this.handleClick}>
        Change the color
      </div>
      );
  }
}

export default Title;
