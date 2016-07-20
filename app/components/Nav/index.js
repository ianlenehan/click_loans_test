import React from 'react';
import {Link, IndexLink} from 'react-router';

import styles from './styles.css';

function Nav() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Click Loans Test</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
            </li>
            <li>
              <IndexLink to="/albums" activeClassName="active-link">Albums</IndexLink>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Nav;
