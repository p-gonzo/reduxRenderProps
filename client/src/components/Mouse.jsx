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
    this.setState(( previousState, {limit} ) => {
      const nextIndex = previousState.index + 1 === limit ? 0 : previousState.index + 1;
      return {index: nextIndex}
    });
  }

  decrementIndex = () => {
    this.setState(( previousState, {limit} ) => {
      const nextIndex = previousState.index - 1 < 0 ? limit - 1 : previousState.index - 1;
      return {index: nextIndex}
    });
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