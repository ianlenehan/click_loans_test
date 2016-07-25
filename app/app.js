/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// TODO constrain eslint import/no-unresolved rule to this block
// Load the manifest.json file and the .htaccess file
import '!file?name=[name].[ext]!./manifest.json';  // eslint-disable-line import/no-unresolved
import 'file?name=[name].[ext]!./.htaccess';      // eslint-disable-line import/no-unresolved

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, hashHistory, Router, browserHistory } from 'react-router';
import configureStore from './store';
import App from 'containers/App';
import Albums from 'containers/AlbumsPage/index.js';
import Home from 'containers/HomePage/index.js';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="albums" component={Albums} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
