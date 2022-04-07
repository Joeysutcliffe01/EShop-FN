import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { Custom404 } from "./components/Custom404";

function App() {
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Custom404 />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
