import axios, { AxiosError } from "axios";
import { useState } from "react";
import { urlAccounts } from "../endpoints";
import DisplayError from "../utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);

  async function login(credentials: userCredentials) {
    try {
        setErrors([])
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`,
        credentials
      );
      console.log(response.data);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Login</h3>
      <DisplayError errors={errors}></DisplayError>
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await login(values)}
      ></AuthForm>
    </>
  );
}
