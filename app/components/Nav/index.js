import React from 'react';
import { IndexLink } from 'react-router';

import styles from './styles.css';

function Nav() {
  return (
    <div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <IndexLink to="/" className={styles.navLink} activeClassName="active-link">Click Loans Test</IndexLink>
        </li>
        <li className={styles.navItem}>
          <IndexLink to="/albums" className={styles.navLink} activeClassName="active-link">Albums</IndexLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
