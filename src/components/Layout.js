import { NavLink, Outlet } from "react-router-dom";

// add this in later to show and hide things, its the same as if user
// import { useContext } from "react";

export function Layout() {
  // const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="nav">
        <NavLink to="/">EShop </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Signup</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <Outlet />
      <footer className="footer">
        <h1>I am a footer 🙂</h1>
      </footer>
    </>
  );
}
