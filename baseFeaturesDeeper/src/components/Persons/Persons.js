import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  state = {
    hello: "world"
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE RECEIVE PROPS]', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE SHOULD COMPONENT UPDATE]', nextProps, nextState)
    console.log(nextProps.persons !== this.props.persons)
    return nextProps.persons !== this.props.persons
  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({
      hello: "not world"
    })
    console.log('[UPDATE COMPONENT WILL UPDATE]', nextProps, nextState)
  }

  render() {
    return this.props.persons.map(( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        position={index}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    })
  }
} 

export default Persons;
