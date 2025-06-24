import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { Success } from "./pages/Success";
import { ResetPassword } from "./pages/ResetPassword";
import { SendEmail } from "./pages/SendEmail";
import { Favorites } from "./pages/Favorites";
import { EditAccount } from "./pages/EditAccount";
import { DeleteAccount } from "./pages/DeleteAccount";
import { DeliveryAddress } from "./pages/DeliveryAddress";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userHome" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/success" element={<Success />} />
      <Route path="/send-email" element={<SendEmail />} />
      <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
      <Route path="/edit-account" element={<EditAccount />} />
      <Route path="/confirm-delete" element={<DeleteAccount />} />
      <Route path="/delivery-address" element={<DeliveryAddress />} />
    </Routes>
  );
};
