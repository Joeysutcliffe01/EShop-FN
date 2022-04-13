import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";

// add this in later to show and hide things, its the same as if user

export function Layout(logout) {
  const { user } = useContext(AuthContext);

  return (
    <>
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
