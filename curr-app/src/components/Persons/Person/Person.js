import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick= {this.props.click}> 
          I'm a {this.props.name} , and I'm {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3"
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref = {this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
        />
      </Aux>
    );
  }
}
// Good for working in a team so team members will know what types are req
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};


export default withClass(Person, classes.Person);
