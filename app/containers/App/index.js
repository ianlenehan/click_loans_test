/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import styles from './styles.css';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Nav from 'components/Nav';


export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Nav />
        <div className={styles.container}>
          <H1 className={styles.siteTitle}>Click Loans Code Test</H1>
          <H3 className={styles.subHeader}>by Ian Lenehan</H3>
          {this.props.children}
        </div>
      </div>

    );
  }
}
