import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { AuthHeader, Header } from "./components/Header";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userHome" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export const HeaderRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Header />} />
      <Route path="/product-detail/:id" element={<Header />} />
      <Route
        path="/userHome"
        element={
          <ProtectedRoute>
            <AuthHeader />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Header />} />
    </Routes>
  );
};
