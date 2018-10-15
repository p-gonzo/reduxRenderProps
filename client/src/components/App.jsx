import React, {Component} from 'react';
import Cat from './Cat.jsx';
import images from '../lib/images.js';

export default class App extends Component {
  state = {
    value:'Hello World'
  }

  toggleHeading = () => {
    this.setState({
      value: 
        this.state.value === 'Hello World' 
          ? 'Goodbye' 
          : 'Hello World'
        })
      }
  
  render() {
    return (
      <div style={{height: '600px'}}>
        <h1 onClick={this.toggleHeading}>{this.state.value}</h1>
        <Cat images={images}/>
      </div>
    );
  }
}