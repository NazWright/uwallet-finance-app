import React from "react";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Verification from "../shared/verification/Verification";
import {
  errorLogFormatter,
  infoLogFormatter,
} from "../../utils/infoLogFormatter";

export default function SignUp() {
  const [needsVerification, setNeedsVerification] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);

  console.dir(currentUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signUpSubmit = async (data) => {
    infoLogFormatter("Starting sign up authentication process");

    const signUpAttributes = {
      email: data.email,
      family_name: data.lastName,
      given_name: data.firstName,
      phone_number: "+13362072779",
    };

    try {
      const authenticatedUser = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: signUpAttributes,
      });

      infoLogFormatter("Successfully authenticated new user.");
      infoLogFormatter("Starting verification process...");
      dispatch(setUser({ ...signUpAttributes, password: data.password }));
      setNeedsVerification(true);
    } catch (error) {
      errorLogFormatter(error);
      dispatch(setUser(undefined));
      dispatch(setAuthenticated(false));
    }
  };

  const submitVerificationCode = async (data) => {
    infoLogFormatter("verifying current user");
    if (!data.verificationCode) {
      infoLogFormatter("No verification code was specified during submission.");
      return;
    }

    const email = currentUser.user.email;
    const password = currentUser.user.password;

    try {
      const status = await Auth.confirmSignUp(email, data.verificationCode);
      if ("SUCCESS" === status) {
        infoLogFormatter("Email address has been successfully confirmed.");
        try {
          /* TODO: encrypt password bc it is being stored in redux...*/
          // Auth.signIn(email, password);
          dispatch(setAuthenticated(true));
          window.location.pathname = "/onboarding-page";
        } catch (error) {
          errorLogFormatter(`Sign In failed... See error message: ${error}`);
          dispatch(setUser(undefined));
          dispatch(setAuthenticated(false));
        }
      }
    } catch (error) {
      errorLogFormatter(
        `Sign Up Confirmation Failed. See error message: ${error}`
      );
    }
  };

  const UnverifiedSignUpContent = () => {
    return (
      <Form
        style={{ position: "relative", top: "30px" }}
        onSubmit={handleSubmit(signUpSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.lastName && <span>This field is required</span>}
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Email Address"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            type="phone"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phone && <span>This field is required</span>}
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </Form.Group>
        <Button type="submit" className="float-end">
          Sign Up
        </Button>
      </Form>
    );
  };

  const formValues = watch();

  return (
    <div className="container mt-5">
      {needsVerification && (
        <h5>
          {`Please enter the verification code sent to ${formValues.email}`}
        </h5>
      )}
      {needsVerification ? (
        <Verification submitVerificationCodeHandler={submitVerificationCode} />
      ) : (
        <UnverifiedSignUpContent />
      )}
    </div>
  );
}
