import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { Custom404 } from "./components/Custom404";
import { useEffect } from "react";
import { getCsrfToken } from "./consts";
import { Layout } from "./components/Layout";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { Cart } from "./components/cartpage/Cart";

function App() {
  useEffect(() => {
    getCsrfToken();
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Custom404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
