import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../consts";
import { UsernameAndPasswordForm } from "./UsernameAndPasswordForm";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [errorState, setErrorState] = useState();
  const navigate = useNavigate();

  const register = async (formState) => {
    try {
      console.log("formState", formState);
      const response = await axios.post(API_BASE_URL + "/register", formState, {
        withCredentials: true,
      });
      console.log("------response", response.data);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data, "what the heck");
      setErrorState({ message: err.response.data.errorMessage });
    }
  };

  return (
    <div className="main__container">
      <h1>Signup Page</h1>
      <UsernameAndPasswordForm
        submitButtonText={"Register!"}
        submitFormAction={register}
        passwordAutocomplete={"new-password"}
        error={errorState}
      />
    </div>
  );
}
