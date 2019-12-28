import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <Route path="/" component={App}></Route>
  </BrowserRouter>
);

export default Routes;
