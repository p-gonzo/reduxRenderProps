import React, {Component} from 'react';
import Mouse from './Mouse.jsx'

export default class Cat extends Component {
  render() {
    return (
      <Mouse render={({posX, posY, index}) => (
        <div>
          <p>The current position of the mouse is {posX}, {posY}.</p>
          <p>The current index is {index}</p>
        </div>
      )} />
    );
  }
}