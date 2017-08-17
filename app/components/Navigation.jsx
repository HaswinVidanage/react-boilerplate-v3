var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Boilerplate V3
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
          </li>
          <li>
            <Link to="/InputExample" activeClassName="active-link">Ex1</Link>
          </li>
          <li>
            <Link to="/InputExample2" activeClassName="active-link">Ex2</Link>
          </li>
          <li>
            <Link to="/InputExample3" activeClassName="active-link">Ex3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
