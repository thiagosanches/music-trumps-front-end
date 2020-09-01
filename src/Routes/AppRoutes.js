import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeView from '../Home/HomeView';
import SignInView from '../SignIn/SignInView';
const Routes = () => (
  <Switch>
    <Route exact path={`/`} component={HomeView} />
    <Route path="/Home" component={HomeView} />
    <Route path="/SignIn" component={SignInView} />
  </Switch>
);
export default Routes;
