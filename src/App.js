import React from 'react';

// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
// components

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}
