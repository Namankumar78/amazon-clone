import './App.css';
import React from 'react';
import Header from './component/header/Header';
import Payment from './component/payment/Payment';
import Home from './component/home/Home';
import Checkout from './component/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/payment'>
            <Payment />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
