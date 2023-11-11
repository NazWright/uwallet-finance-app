import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Verification({ submitVerificationCodeHandler }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(submitVerificationCodeHandler)}>
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
}
