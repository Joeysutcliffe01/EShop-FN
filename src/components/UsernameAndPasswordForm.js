import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      {error && <h2 style={{ color: "red" }}>{error.message}</h2>}
      <input
        type="text"
        name="username"
        autoComplete="username"
        value={formState.username}
        onChange={handleFormState}
      />
      <input
        type="password"
        name="password"
        autoComplete={passwordAutocomplete}
        value={formState.password}
        onChange={handleFormState}
      />
      {console.log(submitButtonText)}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
}
