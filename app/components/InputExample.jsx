import React from 'react';
import Form from './Form.jsx';
import update from 'immutability-helper'


class InputExample extends React.Component {

  state = {
    fields: {
      email: '',
      password: '',
      rePassword: ''
    },
  }

  fieldChange = (field, value) => {
    this.setState(update(this.state, {fields: {[field]: {$set: value}}}))
  }

  render () {
    return (<Form
      fields={this.state.fields}
      onChange={this.fieldChange}
      onValid={() => alert('Submitting...')}
      onInvalid={() => alert('Error!')}
    />)
  }
};

export default InputExample;
