import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Component life Cycle
          </p>

        </header>
        <br></br>
          <br></br>

        <Body />
      </div>
    );
  }
}
class Body extends Component {
  constructor(props){
    super(props);
    this.state = {num:0};
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){

     this.setState({num:Math.floor(Math.random()*10)})
  }
  render(){
    return(
      <div>
        <button onClick={this.getRandomNumber}>genareate random number</button>
        <br></br>
          <br></br>

            <br></br>

        <Number myNumber={this.state.num}/>
      </div>
    );
  }
}
class Number extends Component {
  componentWillMount(){
    console.log("componentWillMount called here")
  }
  componentDidMount(){
    console.log("componentDidMount called here")
  }
  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called here")
  }
  shouldComponentUpdate(newProps , nextState){
    console.log("called should component Update");
    return true;
  }
  componentWillUpdate(newProps , nextState){
    console.log("called  component will Update");
  }
  componentDidUpdate(newProps , nextState){
    console.log("called  component Did Update");
  }
  componentWillUnmount(newProps , nextState){
    console.log("called  component will unmount");
  }



  render(){
    return(
      <div>
          {this.props.myNumber}
      </div>
    );
  }
}
export default App;
