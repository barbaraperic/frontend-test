import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
    color: "#ffffff"
    };
  }

  handleClick = () => {
    // var actual = `${this.state.color}`
    var d1 = document.getElementById('list');
    var content = `<li style="color: ` + this.state.color + `;">` + this.state.color + `</li>`;
    d1.insertAdjacentHTML('beforeend', content);

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
        Click to change the color
      </div>
      );
  }
}

export default Title;
