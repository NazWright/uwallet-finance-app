import React from "react";
import { API, Hub, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";

export default function SignIn() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Authenticating user from sign in: ");
    console.log("data", data);
    try {
      const authenticatedUserMeta = await Auth.signIn(
        data.email,
        data.password
      );
      const user = {
        username: authenticatedUserMeta.username,
        email: authenticatedUserMeta.attributes.email,
        /* TODO: encrypt this password before storing in redux.*/
        password: data.password,
      };
      dispatch(setAuthenticated(true));
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
    }
  };

  let formState = "signIn";

  let formInputState = {
    ...watch(),
    verificationCode: "",
  };

  console.log(watch());

  return (
    <div className="container mt-5">
      <h2 className="mb-4"> Sign In </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </Form.Group>

        <Button type="submit" className="float-end">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
