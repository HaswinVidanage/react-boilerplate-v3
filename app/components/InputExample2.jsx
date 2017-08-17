//https://github.com/vishalvisd/react-validator

import React from 'react';
var ReactDOM = require('react-dom');
import {Validation, fieldValidatorCore} from "react-validation-framework";
import validator from "validator";

class InputExample2 extends React.Component {



  render () {
    return (
      <Validation
            group="myGroup1"
      validators={[{
        validator: (val) => !validator.isEmpty(val),
        errorMessage: "Cannot be left empty"
      }, {
              validator: (val) => validator.isNumeric(val),
              errorMessage: "Should be a numeric number"
            }, {
              validator: (val) => {
                 if (parseInt(val) > 100){
             return false;
                 } else {
             return true;
                 }
              errorMessage: "Must be any number less than 100"
        }
            }]}>
      <input
         value={1}
         
         style={{width: "100%"}}
               minHeight={this.state.somevalue.value1} //foo
         onChange={
          (evt)=>{
            console.log("you have typed: ", evt.target.value);

               }
             }/>
        </Validation>

    )
  }
};

export default InputExample2;
