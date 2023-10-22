import React from "react";
import { API, Hub, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Authenticating user: ");
    console.log("data", data);
    Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email,
      },
    });
  };

  let formState = "signUp";

  let formInputState = {
    ...watch(),
    verificationCode: "",
  };

  console.log(watch());

  return (
    <div className="container mt-5">
      <h2 className="mb-4"> Sign Up </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
}
