import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../consts";
import { Signin } from "./Signin";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [errorState, setErrorState] = useState();
  const navigate = useNavigate();

  const register = async (formState) => {
    try {
      console.log("formState", formState);
      const response = await axios.post(API_BASE_URL + "/register", formState);
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
      setErrorState({ message: err.response.data.errorMessage });
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Signin
        submitButtonText={"Register!"}
        submitFormAction={register}
        passwordAutocomplete={"new-password"}
        error={errorState}
      />
    </div>
  );
}
