import React from "react";
import { API, Hub, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { setUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const [hasVerification, setHasVerification] = useState(false);
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
    const status = await Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email,
      },
    });
    console.log(status);
    dispatch(setUser(data));
    setHasVerification(true);
  };

  const submitVerificationCode = async (data) => {
    if (!data.verificationCode) return;
    const status = await Auth.confirmSignUp(data.email, data.verificationCode);
    if ("SUCCESS" === status) {
      console.info("User has been successfully confirmed.");
      Auth.signIn(data.email, data.password);
      /*TODO: Update the authenticated status to be true to redirect to dashboard */
    }
  };

  const VerifiedContent = () => {
    return (
      <Form onSubmit={handleSubmit(submitVerificationCode)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Verification Code"
            type="text"
            {...register("verificationCode", { required: true })}
          />
        </Form.Group>
        <Button type="submit" className="float-end">
          Verify Account
        </Button>
      </Form>
    );
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

  let formState = "signUp";

  let formInputState = {
    ...watch(),
    verificationCode: "",
  };

  const formValues = watch();

  return (
    <div className="container mt-5">
      <h2 className="mb-4"> Sign Up </h2>
      {hasVerification && (
        <h5>
          {`Please enter the verification code sent to ${formValues.email}`}
        </h5>
      )}
      {hasVerification ? <VerifiedContent /> : <UnverifiedSignUpContent />}
    </div>
  );
}
