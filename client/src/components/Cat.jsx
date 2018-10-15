import React, {Component} from 'react';
import Mouse from './Mouse.jsx'

export default class Cat extends Component {
  render() {
    console.log(this.props);
    const {images} = this.props
    return (
      <Mouse limit={images.cats.length} render={({posX, posY, index}) => (
        <div>
          <p>The current position of the mouse is {posX}, {posY}.</p>
          <p>The current index is {index}</p>
          <img src={images.cats[index]} />
        </div>
      )} />
    );
  }
}