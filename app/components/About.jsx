var React = require('react');
import PropTypes from 'prop-types';
var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a Timer app done using React.
        You can find this project at <a href="https://github.com/HaswinVidanage/ReactTimer" target="_new">ReactTimer</a>
        <br/>
        &copy;2017 Haswin Vidanage

      </p>
      <hr/>
      <p>
        Here are some of the tools I used :
      </p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react/" target="_new">React</a> - JavaScript framework used.
        </li>
        <li>
          <a href="https://github.com/mjackson/expect" target="_new">expect</a> - For assertions.
        </li>
        <li>
          <a href="http://mochajs.org/" target="_new">Mocha</a> - JavaScript test framework.
        </li>
        <li>
          <a href="https://karma-runner.github.io/1.0/index.html" target="_new">Karma</a> - For testing.
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
