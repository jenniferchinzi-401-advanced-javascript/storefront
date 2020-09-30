import React from 'react';
import './App.css';
import Header from './components/Header';
import SimpleCart from './components/cart/SimpleCart';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <SimpleCart />
      <Categories />
      <Products />
    <Footer />
    </>
);
}

export default App;
