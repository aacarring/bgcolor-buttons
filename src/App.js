import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          backgroundColor: "white"
        };
        this.handleClickRed = this.handleClickRed.bind(this);
        this.handleClickOrange = this.handleClickOrange.bind(this);
        this.handleClickYellow = this.handleClickYellow.bind(this);
    }

handleClickRed(e) {
  this.setState({
    backgroundColor: "red"
  });
}
handleClickOrange(e) {
  this.setState({
    backgroundColor: "orange"
  });
}
handleClickYellow(e) {
  this.setState({
    backgroundColor: "yellow"
  });
}

render() {
    return (
        <div style={{backgroundColor: this.state.backgroundColor}}>
            <button onClick={this.handleClickRed}>Red</button>
            <button onClick={this.handleClickOrange}>Orange</button>
            <button onClick={this.handleClickYellow}>Yellow</button>
        </div>
    )
}

}

export default App