import React, { Component } from 'react';
import classnames from 'classnames';
import { Route, Redirect, Switch } from 'react-router-dom'

import './style.css';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

import Dashboard from '../Dashboard';
import Product from '../Product';
import Products from '../Products';
import Orders from '../Orders';
import Order from '../Order';
import Customers from '../Customers';
import Customer from '../Customer';
import NotFound from '../NotFound';

class App extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)}>
        <AppHeader />

        <div className="AppMain">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Redirect
                  to={{
                    pathname: '/dashboard'
                  }}
                />
              )}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={Products} />
            <Route path="/orders/:id" component={Order} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers/:id" component={Customer} />
            <Route path="/customers" component={Customers} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <AppFooter />
      </div>
    );
  }
}

export default App;
