import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOuput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Sam"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username}
          usernameChangeHandler={this.usernameChangeHandler} />
        <UserOuput 
          username={this.state.username}/>
        <UserOuput 
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
