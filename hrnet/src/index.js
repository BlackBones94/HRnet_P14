import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import HeaderTitle from './componant/headerTitle';
import EmployeePage from './pages/EmployeePages';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <Router>
        <HeaderTitle />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Employee' element = {<EmployeePage />}/>
        </Routes>
      </Router>
    </Provider> 
  </React.StrictMode>
);
 
