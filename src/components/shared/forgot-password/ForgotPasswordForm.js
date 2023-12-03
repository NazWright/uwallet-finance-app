import React from "react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function ForgotPasswordForm() {
  /* TODO: For added security...you could add a captcha to this process */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div>
      <h2>Forgot Password</h2>
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

        <Button type="submit" className="float-end">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
