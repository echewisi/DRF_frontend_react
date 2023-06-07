import React from 'react';
import { ReactDOM } from 'react-dom';
import './index.css';
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';

const routing=(
  <Router>
    <React.StrictMode>
    <Header />
      <Switch>
        <Route exact path= "/" component= {App} />
      </Switch>
    <Footer />

    </React.StrictMode>
  </Router>
);