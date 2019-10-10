import React from 'react';
import { Link } from 'react-router-dom';

export default class TopNav extends React.Component {
  render() {
    console.log('props.route.path = '+ this.props.route.path)
    let selected = '';
    if(typeof this.props.route.path === 'string') {
      selected = this.props.route.path.split('/').pop();
    }
    return (
      <nav className="teal">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Isomorphic React</a>
          <ul id="nav-mobile" className="right">
            <li className={selected === '' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={selected === 'about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}
