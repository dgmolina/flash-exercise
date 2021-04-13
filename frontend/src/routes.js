import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SearchEmployee from './components/SearchEmployee';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SearchEmployee />
      </Route>
    </Switch>
  </Router>
);

export default Routes;