import React, {Component} from 'react';
import Mouse from './Mouse.jsx';
import Cat from './Cat.jsx';

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
        <Mouse render ={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    );
  }
}