import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import AddProduct from "./FormComponent/CreateForm";
import "./styling/Profile.css";

export function Profile({ currentUser }) {
  const navigate = useNavigate();
  const { user, removeUserFromContext } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // useEffect(() => {
  //   const getAllProducts = () => {
  //     axios
  //       .get(`${API_BASE_URL}/products`)
  //       .then((response) => {
  //         setProducts(response.data.products);
  //         // console.log(response.data.products);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   // console.log(products);

  //   getAllProducts();
  // }, []);

  const logout = async () => {
    try {
      const response = await axios.post(API_BASE_URL + "/logout");
      console.log(response.data);
      removeUserFromContext();
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("there was an error logging out");
    }
  };
  return (
    <div className="main__container-profile">
      <div className="main__container-profile-inner">
        <h1>Profile Page</h1>
        {currentUser && <h2>Welcome, {currentUser.username}</h2>}
        <div className="profile__btn-container">
          <NavLink className="profile__btn" to="/">
            Buy
          </NavLink>
          <button className="profile__btn" onClick={logout}>
            Logout
          </button>
        </div>
        <AddProduct />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
