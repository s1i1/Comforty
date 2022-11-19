import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { ShopPage } from './shop';
import { ProductPage } from './product';
import { About } from './about';
import { CartPage } from './cart';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
