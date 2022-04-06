import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Signup } from "./components/Signup";
import { Custom404 } from "./components/Custom404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Custom404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
