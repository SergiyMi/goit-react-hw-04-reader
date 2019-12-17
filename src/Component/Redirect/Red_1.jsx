import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class Red_1 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Redirect to="/reader?item=1" />
      </BrowserRouter>
    );
  }
}
