import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

import Home from './pages/Home';
import HeaderTitle from './componant/headerTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <HeaderTitle />
        <Routes>
          <Route path='/' element = {<Home />}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
 
