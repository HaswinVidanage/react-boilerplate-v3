import React from 'react';
import PropTypes from 'prop-types';
import Promise from 'bluebird'
import validator from 'validator'
import {validated} from 'react-custom-validation'
import style from '../styles/fixed/FormStyle';

// input fields
import InputField from './inputs/InputField';

const isEmail = (email) =>
  validator.isEmail(email) ? null : 'This is not a valid email.'

const isUnique = (email) => Promise.delay(1000)
  .then(() => email.includes('used') ? 'This email is already used.' : null)

const minLength = (password, length) =>
  password.length >= length ? null : 'Password is too short.'

const areSame = (password, rePassword) =>
  password === rePassword ? null : 'Passwords do not match.'

// To add some validations for this React component,
// we need to define a function that calculates validation config from component's props:
function validationConfig(props) {
  const {email, password, rePassword} = props.fields

  return {
    fields: ['email', 'password', 'rePassword'],

    validations: {
      email: [
        [isEmail, email],
        [isUnique, email]
      ],
      password: [[minLength, password, 6]],
      rePassword: {
        rules: [[areSame, password, rePassword]],
        fields: ['password', 'rePassword']
      }
    },
  }
}


class Form extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {value: ''};

    //this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log('Child ValueChanged', e.target.value);
    // this.setState({value: event.target.value});
    // you can now use the value of input field here from e.target.value
  }

  render() {
    const {fields, onChange, onValid, onInvalid, $field, $validation} = this.props


    return (
      <form className={style}>


        <h3>Input Field Validation</h3>

        <InputField
          labelText = 'This is the label'
          type = 'text'
          errorMsg='Field Error Message Shown'
          onChange = {this.handleInputChange}
        />

        <div className="validation-wrapper" >
          <label className= {($validation.email.show && $validation.email.error.reason) ? 'showLabelError' : 'labelStyle'}>Email</label>
          <input type="text" value={fields.email}
            {...$field('email', (e) => onChange('email', e.target.value))}
            className= {($validation.email.show && $validation.email.error.reason) ? 'showInputError' : ''}
            />
          {$validation.email.show && <span>{$validation.email.error.reason}</span>}
        </div>

        <div className="validation-wrapper" >
          <label className= {($validation.password.show && $validation.password.error.reason) ? 'showLabelError' : 'labelStyle'}>
            Password
          </label>
          <input type="password" value={fields.password}
            {...$field('password', (e) => onChange('password', e.target.value))}/>
          {$validation.password.show && <span>{$validation.password.error.reason}</span>}
        </div>
        <div className="validation-wrapper" >
          <label className= {($validation.rePassword.show && $validation.rePassword.error.reason) ? 'showLabelError' : 'labelStyle'}>
            Repeat password
          </label>
          <input type="password" value={fields.rePassword}
            {...$field('rePassword', (e) => onChange('rePassword', e.target.value))}/>
          {$validation.rePassword.show && <span>{$validation.rePassword.error.reason}</span>}
        </div>
        <div className="validation-wrapper" >
          <button onClick={(e) => {
            e.preventDefault()
            this.props.$submit(onValid, onInvalid)
          }} className="" >Sign up</button>
        </div>
      </form>
    )
  }
}
Form = validated(validationConfig)(Form)

export default Form;
