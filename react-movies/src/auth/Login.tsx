import axios, { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlAccounts } from "../endpoints";
import DisplayError from "../utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history=useHistory();

  async function login(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`,
        credentials
      );      
      saveToken(response.data);
      update(getClaims());
      history.push('/')
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
