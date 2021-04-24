import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import TaskList from '../pages/TaskList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/login"  component={SignIn} />
    <Route path="/tasklist" component={TaskList} isPrivate />
  </Switch>
);

export default Routes;