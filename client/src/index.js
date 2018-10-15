import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
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
    return <h1 onClick={this.toggleHeading}>{this.state.value}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));