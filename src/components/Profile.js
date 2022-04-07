import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthProviderWrapper";

export function Profile() {
  const navigate = useNavigate();
  // const { user, removeUserFromContext } = useContext();

  // useEffect(() => {
  //   console.log(user);
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  // const logout = async () => {
  //   try {
  //     const response = await axios.post(API_BASE_URL + "/logout");
  //     console.log(response.data);
  //     removeUserFromContext();
  //     navigate("/login");
  //   } catch (err) {
  //     console.log(err);
  //     alert("there was an error logging out");
  //   }
  // };
  return (
    <div>
      {/* <h1>Profile Page</h1>
      {user && <h2>Welcome, {user.username}</h2>}
      <button onClick={logout}>Logout</button> */}
      <h1>Hey </h1>
    </div>
  );
}
