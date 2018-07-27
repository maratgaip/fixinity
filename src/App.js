import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import Landing from './components/Landing';
import RepairPhone from './components/Repair';
import Device from './components/Device';

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/repair/:device" component={Device} />
        <Route path="/repair" component={RepairPhone} />
        <Route path="/" component={Landing} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;