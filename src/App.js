import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import Landing from './components/Landing';
import RepairPhone from './components/Repair';
import Device from './components/Device';
import Model from './components/Model';
import Color from './components/Color';
import ZipCode from './components/ZipCode';
import NoSupport from './components/NoSupport';

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/repair/:device/:model/:color/zip-code" component={ZipCode} />
        <Route path="/repair/:device/:model/:color" component={Color} />
        <Route path="/repair/:device/:model" component={Model} />
        <Route path="/repair/:device" component={Device} />
        <Route path="/repair" component={RepairPhone} />
        <Route path="/no-support" component={NoSupport} />
        <Route path="/" component={Landing} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;