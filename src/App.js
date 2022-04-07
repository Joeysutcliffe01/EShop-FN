import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { Custom404 } from "./components/Custom404";
import {Signin} from "./components/Signin";
import axios from "axios";
import {API_BASE_URL} from "./consts";

function App() {
  const handleSignIn = async (formStatePizza) =>{
    console.log("handleSignIn", formStatePizza);
    let response = await axios.post(`${API_BASE_URL}/signin`, formStatePizza, {withCredentials: true})
    console.log(response.data);
  }
  
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin submitFormAction={handleSignIn} />} />
      <Route path="*" element={<Custom404 />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
