import React from "react";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import Verification from "../shared/verification/Verification";

export default function SignUp() {
  const [needsVerification, setNeedsVerification] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signUpSubmit = async (data) => {
    console.log("Signing Up user... ");
    console.log("data", data);

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

      console.log(authenticatedUser);
      dispatch(setUser({ signUpAttributes, password: data.password }));
      setNeedsVerification(true);
    } catch (error) {
      console.error(error);
      dispatch(setUser(undefined));
      dispatch(setAuthenticated(false));
    }
  };

  const submitVerificationCode = async (data) => {
    if (!data.verificationCode) return;
    const status = await Auth.confirmSignUp(data.email, data.verificationCode);
    if ("SUCCESS" === status) {
      console.info("User has been successfully confirmed.");
      try {
        Auth.signIn(data.email, data.password);
        dispatch(setAuthenticated(true));
      } catch (error) {
        console.error(error);
        dispatch(setUser(undefined));
        dispatch(setAuthenticated(false));
      }
    }
  };

  const UnverifiedSignUpContent = () => {
    return (
      <Form onSubmit={handleSubmit(signUpSubmit)}>
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
      <h2 className="mb-4"> Sign Up </h2>
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
