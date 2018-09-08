import React from 'react';
import './Person.css';

const person = (props) => {
    return (
      <div className="person-div">
        <div
          onClick={props.switchNameHandler}>
          I'm {props.person.name} and I am {props.person.age} years old!
        </div>
        <input
          type="text"
          onChange={props.nameChangeHandler}
          value={props.person.name}
          className="person-input"/>
      </div>
    )
};

export default person;
