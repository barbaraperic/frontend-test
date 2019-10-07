import React, { Component } from 'react';

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

  }
  render () {
    return (
      // BUILD AND RETURN HTML COMPONENT
      <div className={this.state.clicked ? 'clicked' : null } onClick={this.handleClick}>
        Hello
      </div>
      );
  }
}

export default Title;
