'use strict';

//file = lib/helpers/form.js
var formHelper = {
  resetMixin: {
    resetForm: function(fields) {
      if(!_.isArray(fields)) {
        var resetForm = {
          inputElement: '',
          inputElement2: '',
          changedInputs: []
        };
      } else {
        resetForm = _.clone(this.state.formData);

        fields.forEach(function(field) {
          resetForm[field] = '';
          _.remove(resetForm.changedInputs, function(value) {
            return value === field
          });
        });
      }

      this.setState({
        formData: resetForm
      });
    }
  },
  validationMixin: {
    getInitialState: function () {
      return {
        valid: null
      };
    },

    getDefaultProps: function() {
      return {
        isDirty: true
      };
    },

    validate: function(value) {
      if(value === 'test'){
        this.setState({
          valid: true
        });
      } else {
        this.setState({
          valid: false
        });
      }
    },

    getValidationCssClasses: function(startingCssClasses) {
      startingCssClasses = startingCssClasses || [];

      if(this.props.isDirty === true) {
        if(this.state.valid === true) {
          startingCssClasses.push('valid');
        } else {
          startingCssClasses.push('invalid');
        }
      }

      return startingCssClasses;
    },

    onChange: function(event) {
      this.validate(event.target.value);
      this.props.onChange(event);
    },

    componentWillMount: function() {
      //we should be validating the value it is pre-populated
      if(this.props.value) {
        this.validate(this.props.value);
      }
    },
  },
  generateFormObject: function(fields) {
    var formObject = {
      changedInputs: []
    };

    _.forEach(fields, function(value, key) {
      if(_.isString(key)) {
        if(value) {
          formObject.changedInputs.push(key);
        }

        formObject[key] = value;
      } else {
        formObject[value] = '';
      }
    });

    return formObject;
  },
  generateFieldChangeCallback: function(field, formDataProperty) {
    formDataProperty = formDataProperty || 'formData';
    return function(event) {
      var tmp = _.clone(this.state[formDataProperty]);
      tmp[field] = event.target.value;
      tmp.changedInputs = _.uniq(tmp.changedInputs.concat([field]));

      this.setState({
        formData: tmp
      });
    }
  }
};

//file = lib/components/validate-text-box.jsx
var ValidatedTextBox = React.createClass({
  mixins: [
    formHelper.validationMixin
  ],

  render: function() {
    var wrapperCssClasses = this.getValidationCssClasses(['input-element']);

    return (
      <div className={wrapperCssClasses.join(' ')}>
        <input type="text" value={this.props.value} onChange={this.onChange} />
      </div>
    );
  }
});

//file = lib/components/validate-text-area.jsx
var ValidatedTextArea = React.createClass({
  mixins: [
    formHelper.validationMixin
  ],

  render: function() {
    var wrapperCssClasses = this.getValidationCssClasses(['input-element']);

    return (
      <div className={wrapperCssClasses.join(' ')}>
        <textarea value={this.props.value} onChange={this.onChange}></textarea>
      </div>
    );
  }
});

//file = lib/index.js
var nucleusReact = {
  components: {
    ValidatedTextBox: ValidatedTextBox,
    ValidatedTextArea: ValidatedTextArea
  },

  helpers: {
    form: formHelper
  }
};

//APPLICATION CODE
var formHelper = nucleusReact.helpers.form;
var ValidatedTextBox = nucleusReact.components.ValidatedTextBox;
var ValidatedTextArea = nucleusReact.components.ValidatedTextArea;

var App = React.createClass({
  mixins: [
    formHelper.resetMixin
  ],

  getInitialState: function() {
    return {
      formData: formHelper.generateFormObject({
        'inputElement': 'test',
        'inputElement2': '',
        'inputElement3': 'i\'m a text area'
      })
    };
  },

  onButton: function() {
    this.resetForm(['inputElement']);
  },

  onAllButton: function() {
    this.resetForm();
  },

  onChange: formHelper.generateFieldChangeCallback('inputElement'),

  onChange2: formHelper.generateFieldChangeCallback('inputElement2'),

  onChange3: formHelper.generateFieldChangeCallback('inputElement3'),

  render: function() {
    console.log(this.state);
    return (
      <div>
        <ValidatedTextBox
          value={this.state.formData.inputElement}
          isDirty={this.state.formData.changedInputs.indexOf('inputElement') !== -1}
          onChange={this.onChange} />
        <button onClick={this.onButton}>reset</button><br />
        <ValidatedTextBox
          value={this.state.formData.inputElement2}
          isDirty={this.state.formData.changedInputs.indexOf('inputElement2') !== -1}
          onChange={this.onChange2} /><br />
        <ValidatedTextArea
          value={this.state.formData.inputElement3}
          isDirty={this.state.formData.changedInputs.indexOf('inputElement3') !== -1}
          onChange={this.onChange3} />
        <br /><button onClick={this.onAllButton}>reset all</button>
        <div>input value: {this.state.formData.inputElement}</div>
        <div>input2 value: {this.state.formData.inputElement2}</div>
        <div>input3 value: {this.state.formData.inputElement3}</div>
      </div>
    );
  }
});

React.renderComponent(<App />, document.body);
