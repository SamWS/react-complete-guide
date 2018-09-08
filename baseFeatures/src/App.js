import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 28 },
      { name: "Adrienne", age: 28 },
      { name: "Julian", age: 31 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Adi", age: 28 },
        { name: "Julesy", age: 31 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sam", age: 28 },
        { name: "Adrienne", age: 28 },
        { name: event.target.value, age: 31 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
      {/* This annonymous function call can be inefficient, avoid. */}
        <button onClick={() => this.switchNameHandler('Sammy')}>Switch Name</button>
        {this.state.persons.map((person, key) => (
          <Person 
            person={person} 
            key={key} 
            switchNameHandler={this.switchNameHandler.bind(this, 'Samuel')}
            nameChangeHandler={this.nameChangeHandler} />
        ))}
      </div>
    );
  }
}

export default App;
