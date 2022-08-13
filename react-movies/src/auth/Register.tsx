import axios, { AxiosError } from "axios";
import { useState } from "react";
import { urlAccounts } from "../endpoints";
import DisplayError from "../utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";

export default function Register() {
  const [errors, setErrors] = useState<string[]>([]);

  async function register(credentials: userCredentials) {
    try {
        setErrors([])
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/create`,
        credentials
      );
      console.log(response);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Register</h3>
      <DisplayError errors={errors}></DisplayError>
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await register(values)}
      ></AuthForm>
    </>
  );
}
