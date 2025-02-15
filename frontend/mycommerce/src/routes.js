import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";

export const Routing = ({ productId }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
};
