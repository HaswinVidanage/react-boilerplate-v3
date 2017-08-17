import React from 'react';


class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('ValueChanged', e.target.value);
    this.setState({value: e.target.value});
    this.props.onChange(e);
  }

  render () {
    const {labelText, type, errorMsg} = this.props;
    return (
      <div className="validation-wrapper">
        <label>{labelText}</label>
        <input
          type={type}
          className= ''
          value={this.state.value}
          onChange={this.handleChange}
          />
          <span>{errorMsg}</span>
      </div>

    );
  }
};

export default InputField;
