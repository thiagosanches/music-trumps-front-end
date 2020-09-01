import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomeView from '../Home/HomeView';
import SignInView from '../SignIn/SignInView';
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/Home" />
    </Route>
    <Route path="/Home" component={HomeView} />
    <Route path="/SignIn" component={SignInView} />
  </Switch>
);
export default Routes;
