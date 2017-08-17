var React = require('react');
var ReactDOM = require('react-dom');
import PropTypes from 'prop-types';
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var About = require('About');
import InputExample from './components/InputExample.jsx';
import InputExample2 from './components/InputExample2.jsx';
import InputExample3 from './components/InputExample3.jsx';
//Load foundation
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="InputExample" component={InputExample}/>
      <Route path="InputExample2" component={InputExample2}/>
      <Route path="InputExample3" component={InputExample3}/>
      <IndexRoute component={InputExample}/>
    </Route>
  </Router>,
   document.getElementById('app')
);
