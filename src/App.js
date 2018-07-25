import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import Landing from './components/Landing';
import Main from './components/main';

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Landing} />
        <Route path="/" component={Main} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;