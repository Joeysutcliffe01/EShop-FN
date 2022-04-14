import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import "./styling/Home.css";
import "./styling/Footer.css";

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
                {/* <button>
                  <a href="#">Logout</a>
                </button> */}
              </>
            )}
            <NavLink className="item" to="/about">
              About
            </NavLink>
          </ul>
          <NavLink className="logo" to="/">
            E<span>Shop</span>
          </NavLink>
        </div>
      </nav>

      <Outlet />
      <footer className="footer">
        <div className="footer__info">
          <div className="footer__left">
            <NavLink className="logo" to="/">
              E<span>Shop</span>
            </NavLink>
          </div>
          <div className="footer__right">
            <h1>See more details</h1>
            <p>
              This Project has a similar consept as ebay, the goal is to help
              customers buy and sell products as easy as possible
            </p>
            <NavLink className="item" to="/about">
              About
            </NavLink>
          </div>
        </div>
        <div className="footer__copyright">
          <p> &#169; Eshop, Created by Ali & Joey </p>
        </div>
      </footer>
    </>
  );
}
