import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export default function Verification() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitVerificationCode = async (data) => {
    if (!data.verificationCode) return;
    const status = await Auth.confirmSignUp(data.email, data.verificationCode);
    if ("SUCCESS" === status) {
      console.info("User has been successfully confirmed.");
      Auth.signIn(data.email, data.password);
      /*TODO: Update the authenticated status to be true to redirect to dashboard */
    }
  };

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
}
