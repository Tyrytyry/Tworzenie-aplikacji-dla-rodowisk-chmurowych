// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomesHTML from './components/html/HomesHTML';
import AdditemHTML from './components/html/AdditemHTML';
import BasketHTML from './components/html/BasketHTML';
import CategoryHTML from './components/html/Category';
import EndHTML from './components/html/End';
import LoginHTML from './components/html/Login';
import MoneyHTML from './components/html/Money';
import PayHTML from './components/html/Pay';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home </Link>

            <Link to="/additem">additem </Link>

            <Link to="/basket">basket </Link>

            <Link to="/category?category=Akcesoria">category </Link>

            <Link to="/end">end </Link>

            <Link to="/login">login </Link>

            <Link to="/money">money </Link>

            <Link to="/pay">pay</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>

		<Route path="/" element={<HomesHTML />} />
		<Route path="/additem" element={<AdditemHTML />} />
		<Route path="/add-item" element={<AdditemHTML />} />
		<Route path="/basket" element={<BasketHTML />} />
		<Route path="/category" element={<CategoryHTML />} />
		<Route path="/end" element={<EndHTML />} />
		<Route path="/login" element={<LoginHTML />} />
		<Route path="/money" element={<MoneyHTML />} />
		<Route path="/pay" element={<PayHTML />} />
      </Routes>
    </div>
  </Router>
);

export default App;
