import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { FinishOrder } from "./pages/FinishOrder";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userHome" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/payment-methods" element={<FinishOrder />} />
    </Routes>
  );
};
