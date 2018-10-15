import React, {Component} from 'react';

export default class Mouse extends Component {
  state = {
    posX: 0,
    posY: 0,
    index: 0,
  }

  handleMouseMove = (evt) => {
    this.setState({
      posX: evt.clientX,
      posY: evt.clientY
    })
  }

  incrementIndex = () => {
    this.setState(prevState => ({index: prevState.index + 1}));
  }

  decrementIndex = () => {
    this.setState(prevState => ({index: prevState.index - 1}));
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{height: '100%'}}>
        {this.props.render(this.state)}
        <button onClick={this.decrementIndex}>Left</button>
        <button onClick={this.incrementIndex}>Right</button>
      </div>
    );
  }
}