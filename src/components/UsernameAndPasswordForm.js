import { useState } from "react";
import "./styling/Form.css";

export function UsernameAndPasswordForm({
  submitFormAction,
  submitButtonText,
  passwordAutocomplete,
  error = null,
}) {
  const [formState, setFormState] = useState({ username: "", password: "" });

  const handleFormState = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormAction(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="form allForms">
      {error && <h2 style={{ color: "red" }}>{error.message}</h2>}
      <input
        type="text"
        name="username"
        autoComplete="username"
        value={formState.username}
        onChange={handleFormState}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        autoComplete={passwordAutocomplete}
        value={formState.password}
        onChange={handleFormState}
        placeholder="Password"
      />
      {console.log(submitButtonText)}
      <button type="submit" className="btn-auth">
        {submitButtonText}
      </button>
    </form>
  );
}
