import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
    clicked: false
    };

  }
  render () {
    return (
      // BUILD AND RETURN HTML COMPONENT
      <div>
        Hello
      </div>
      );
  }
}

export default Title;
