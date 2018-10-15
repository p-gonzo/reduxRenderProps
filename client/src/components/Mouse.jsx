import React, {Component} from 'react';

export default class Mouse extends Component {
  state = {
    posX: 0,
    posY: 0,
  }

  handleMouseMove = (evt) => {
    this.setState({
      posX: evt.clientX,
      posY: evt.clientY
    })
  }

  render() {
    const {posX, posY} = this.state;
    return (
      <div onMouseMove={this.handleMouseMove} style={{height: '100%'}}>
        {this.props.render(this.state)}
      </div>
    );
  }
}