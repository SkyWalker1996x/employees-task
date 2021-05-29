import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// pages
import { Employees } from 'pages/Employees';
import { NotFoundPage } from 'pages/NotFoundPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/employees" />
      </Route>

      <Route exact path="/employees" component={Employees} />

      <Route render={() => <NotFoundPage />} />
    </Switch>
  );
}

export default App;
