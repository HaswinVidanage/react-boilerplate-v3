var React = require('react');
import PropTypes from 'prop-types';
var Navigation = require('Navigation');

//refactored the above with arrow functions
var Main = (props) =>{
  return(
    <div>
      <Navigation/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
  </div>
  );
}

module.exports = Main;
