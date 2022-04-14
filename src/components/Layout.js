import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import "./styling/Home.css";

// add this in later to show and hide things, its the same as if user

export function Layout() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* <div className="main__container"> */}
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            {!user ? (
              <>
                <NavLink className="item" to="/about">
                  About
                </NavLink>
                <NavLink className="item" to="/login">
                  Login
                </NavLink>
                <NavLink className="item" to="/register">
                  Signup
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="item" to="/profile">
                  Profile
                </NavLink>
                <NavLink className="item" to="/cart">
                  Cart
                </NavLink>
                <NavLink className="item" to="/checkout">
                  Checkout
                </NavLink>
                <button>
                  <a href="#">Logout</a>
                </button>
              </>
            )}
          </ul>
          <NavLink className="logo" to="/">
            E<span>Shop</span>
          </NavLink>
        </div>
      </nav>

      <Outlet />
      <footer className="footer">
        <h1>I am a footer 🙂</h1>
      </footer>
    </>
  );
}
