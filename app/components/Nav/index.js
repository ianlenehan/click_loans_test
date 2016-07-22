import React from 'react';
import {Link, IndexLink} from 'react-router';

import styles from './styles.css';

function Nav() {
    return (
      <div>
          <ul>
            <li>
              <IndexLink to="/" activeClassName="active-link">Click Loans Test</IndexLink>
            </li>
            <li>
              <IndexLink to="/albums" activeClassName="active-link">Albums</IndexLink>
            </li>
          </ul>
      </div>
    )
};

export default Nav;
