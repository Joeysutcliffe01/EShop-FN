import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { Custom404 } from "./components/Custom404";
import { useEffect, useState } from "react";
import { API_BASE_URL, getCsrfToken } from "./consts";
import { Layout } from "./components/Layout";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { Cart } from "./components/cartpage/Cart";
import { CheckoutPage } from "./components/Payments/CheckoutPage";
import axios from "axios";
import { About } from "./components/About";

function App() {
  const [userState, setUserState] = useState();

  useEffect(() => {
    getCsrfToken();
    async function getUser() {
      const UserFromSession = await axios.get(`${API_BASE_URL}/user`);

      setUserState(UserFromSession.data);
    }

    getUser();
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile currentUser={userState} />}
          />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Custom404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
