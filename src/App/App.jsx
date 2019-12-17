import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.module.css';
import publications from '../DB/publications.json';

import Reader from '../Component/Reader/Reader';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path="/reader"
              render={props => <Reader {...props} items={publications} />}
            />
            <Redirect to="/reader?item=1" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
