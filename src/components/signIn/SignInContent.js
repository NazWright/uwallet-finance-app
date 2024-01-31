import React from "react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import "./SignIn.css";
import uWalletLoginImage from "../../static/img/untitled-design-36-3.png";
import SignInFormContent from "./SignInForm";

export default function SignInContent({ forgotPasswordTrigger, setLoading }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.info("Authenticating user from sign in: ");
    try {
      const authenticatedUserMeta = await Auth.signIn(
        data.email,
        data.password
      );
      const user = {
        username: authenticatedUserMeta.username,
        email: authenticatedUserMeta.attributes.email,
        phone_number: authenticatedUserMeta.attributes.phone_number,
        family_name: authenticatedUserMeta.attributes.family_name,
        given_name: authenticatedUserMeta.attributes.given_name,
        password: data.password,
      };

      dispatch(setUser(user));
      //triggerVerification();
      dispatch(setAuthenticated(true));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInFormContent
      setLoading={setLoading}
      forgotPasswordTrigger={forgotPasswordTrigger}
    />
  );
}
