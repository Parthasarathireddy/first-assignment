import React from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';
import './userInput/userInput.css';

class App extends React.Component {
  state = {
    userName : "Test"
  }
  userNameChangehandler = (event)=>{
    this.setState({
      userName : event.target.value
    })
  }
  render(){
    return (
      <div className="App userInput">
        <UserInput changed = {this.userNameChangehandler} value = {this.state.userName}/>
        <UserOutput userName = {this.state.userName}/>
        <UserOutput userName = {this.state.userName}/>
        <UserOutput userName = {this.state.userName}/>
      </div>
    );
  }
}

export default App;
