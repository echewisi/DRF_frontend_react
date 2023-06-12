import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';

const routing=(
  <Router>
    <React.StrictMode>
    <Header />
      <Routes>
        <Route exact path= "/" component= {App} />
      </Routes>
    <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
