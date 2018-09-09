import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import WithClass from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClasses'
import Aux from '../../../hoc/Aux';

import classes from './Person.css';

class Person extends Component {

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElem.focus();
    }
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {
            this.inputElem = inp
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClasses(Person, classes.Person);
