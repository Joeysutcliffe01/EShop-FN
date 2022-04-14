import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import "./styling/Home.css"

// add this in later to show and hide things, its the same as if user

export function Layout(logout) {
  const { user } = useContext(AuthContext);

  return (
    <>
        <div className="main__container">
<nav>
	<input id="nav-toggle" type="checkbox">
	<div className="logo">MINZ<strong>CODE</strong></div>
	<ul class="links">
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#work">Work</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
	<label for="nav-toggle" class="icon-burger">
		<div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
	</label>
</nav>

<div className="container">
	<img src="https://picsum.photos/id/559/1000/1000" alt="">
	<img src="https://picsum.photos/id/558/1000/1000" alt="">
</div>
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
