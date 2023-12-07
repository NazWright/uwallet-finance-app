import React, { useState } from "react";
import "./profile.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export default function Profile() {
  const [hasVerification, setHasVerification] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitVerificationCode = async (data) => {
    if (!data.verificationCode) return;
    try {
      const status = await Auth.confirmSignUp(
        data.email,
        data.verificationCode
      );
      if ("SUCCESS" === status) {
        console.info("User has been successfully confirmed.");
        /*TODO: Update the authenticated status to be true to redirect to dashboard */
      }
    } catch (error) {
      console.error(error);
      //TODO: redirect to the dashboard here
    }
  };

  const onSubmit = async (data) => {
    const user = await Auth.currentAuthenticatedUser();
    const status = await Auth.updateUserAttributes(user, data);
    const updateStatus = await Auth.verifyCurrentUserAttribute("email");
    if (updateStatus === "SUCCESS") {
      setHasVerification(true);
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

  return (
    <div className="container mt-5">
      {hasVerification ? (
        <VerifiedContent />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              {...register("email")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
