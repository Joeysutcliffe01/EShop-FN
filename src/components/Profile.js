import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import AddProduct from "./FormComponent/CreateForm";
import "./styling/Profile.css";

export function Profile({ currentUser }) {
  const navigate = useNavigate();
  const { user, removeUserFromContext } = useContext(AuthContext);
  const [formIsShown, setFormIsShown] = useState(false);

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const toggleForm = () => {
    setFormIsShown(!formIsShown);
  };

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
        <div className="main__container-profile-inner-welcome">
          {currentUser && <h2>Welcome, {currentUser.username}</h2>}
          <p>Would you like to buy or sell something</p>
        </div>

        <div className="profile__btn-container">
          <button className="profile__btn">
            <a href="/">Buy</a>
          </button>
          <button className="profile__btn sell" onClick={toggleForm}>
            {formIsShown ? "Hide form" : "Sell"}
          </button>
        </div>
        {formIsShown && <AddProduct />}
        <button className="logout__btn-profile" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
