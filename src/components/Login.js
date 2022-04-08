import { useContext, useState } from "react";
import axios from "axios";
import { API_BASE_URL, getCsrfToken } from "../consts";
import { UsernameAndPasswordForm } from "./UsernameAndPasswordForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProviderWrapper";

export function Login() {
  const [errorState, setErrorState] = useState();
  const navigate = useNavigate();
  const { addUserToContext } = useContext(AuthContext);
  const login = async (formState) => {
    try {
      console.log("formState", formState);

      const response = await axios.post(API_BASE_URL + "/login", formState);
      console.log("------response", response.data);
      addUserToContext(response.data.user);
      getCsrfToken();
      navigate("/profile");
    } catch (err) {
      console.log(err.response.data);
      setErrorState({ message: err.response.data.errorMessage });
    }
  };

  return (
    <div className="main__container">
      <h1>Login Page</h1>
      <UsernameAndPasswordForm
        submitButtonText={"Login"}
        submitFormAction={login}
        passwordAutocomplete={"current-password"}
        error={errorState}
      />
    </div>
  );
}
