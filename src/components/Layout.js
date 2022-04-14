import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import "./styling/Home.css"

// add this in later to show and hide things, its the same as if user

export function Layout(logout) {
  const { user } = useContext(AuthContext);

  return (
    <>
        <div className="navbar">
          Saffron
        <ul className="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <section className="banner-area" id="home"></section>

      <section className="about-area" id="about">
        <div className="text-part"></div>
      </section>

      <section className="port-area" id="portfolio">
        <div className="text-part"></div>
      </section>

      <section className="service-area" id="services">
        <div className="text-part">
          <h1>Services Area</h1>
        </div>
      </section>
      <nav className="nav">
        <NavLink to="/">EShop </NavLink>

        {!user ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Signup</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
          </>
        )}
      </nav>
      <Outlet />
      <footer className="footer">
        <h1>I am a footer 🙂</h1>
      </footer>
    </>
  );
}
