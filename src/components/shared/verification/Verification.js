import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Verification({ submitVerificationCodeHandler, email }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div>
        <h5
          className="mb-3"
          style={{ marginTop: "7rem", textAlign: "center", fontSize: "1rem" }}
        >
          Please enter verification code sent to{" "}
          <span className="verification-email">{email}</span>
        </h5>
      </div>
      <Form onSubmit={handleSubmit(submitVerificationCodeHandler)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Form.Group className="mb-3 form-control uwallet-input-group">
          <input
            className="uwallet-input"
            placeholder="Verification Code"
            type="text"
            {...register("verificationCode", { required: true })}
          />
          {errors["verificationCode"] && <span className="error-icon">x</span>}
        </Form.Group>
        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            className="authentication-button sign-up onboarding"
          >
            <div className="text-white">Verify Account</div>
          </button>
        </div>
      </Form>
    </>
  );
}
