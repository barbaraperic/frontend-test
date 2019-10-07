import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    // SET STATE
    this.state = {
      color: "#ffffff"
    };
  }

  handleClick = () => {
    // INSERT HTML WITH COLOR STYLE
    var element = document.getElementById('list');
    var content = `<li style="color: ` + this.state.color + `;">` + this.state.color + `</li>`;
    element.insertAdjacentHTML('beforeend', content);

    const url = 'http://www.colr.org/json/color/random';
    // FETCH JSON AND CHANGE THE STATE
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
      <button
      onClick={this.handleClick}
      className="btn btn-outline-dark mb-5"
      style={{color: `${this.state.color}`}}
        >{this.props.message}
      </button>
      );
  }
}

export default Title;
