import React, {Component} from 'react';

export default class Cat extends Component {
  render() {
    const {posX, posY} = this.props.mouse;
    return(
      <p>The current position of the mouse is {posX}, {posY}.</p>
    );
  }
}