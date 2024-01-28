import React from "react";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Verification from "../shared/verification/Verification";
import {
  errorLogFormatter,
  infoLogFormatter,
} from "../../utils/infoLogFormatter";

export default function SignUp({ verificationHandler }) {
  const [needsVerification, setNeedsVerification] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      verificationHandler();
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

    const email = currentUser.email;
    const password = currentUser.password;

    try {
      const status = await Auth.confirmSignUp(email, data.verificationCode);
      if ("SUCCESS" === status) {
        infoLogFormatter("Email address has been successfully confirmed.");
        try {
          /* TODO: encrypt password bc it is being stored in redux...*/
          // Auth.signIn(email, password);
          dispatch(setAuthenticated(true));
          navigate("/onboarding-page");
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

  const inputMarginBottomClassName = "mb-4";

  const requiredErrorMessage = "This field is required.";

  const info = {
    fname: "Naz",
    lname: "Wright",
    email: "nazwrightthedeveloper@gmail.com",
    phoneNum: "3362072779",
    password: "@Linux2019ns",
  };

  const signUpFormFieldsMeta = [
    {
      id: 0,
      name: "firstName",
      placeholder: "First Name",
      type: "text",
      required: true,
      value: info.fname,
    },
    {
      id: 1,
      name: "lastName",
      placeholder: "Last Name",
      type: "text",
      value: info.lname,
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email Address",
      value: info.email,
      type: "email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      placeholder: "Phone Number",
      value: info.phoneNum,
      type: "phone",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      value: info.password,
      type: "password",
      required: true,
    },
  ];

  const SignUpInput = ({ type, name, required, placeholder, value }) => {
    return (
      <Form.Group className={inputMarginBottomClassName}>
        <div className="form-control uwallet-input-group">
          <input
            className="uwallet-input"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            {...register(name, { required: true })}
          />
          {errors[name] && required && <span className="error-icon">x</span>}
        </div>
      </Form.Group>
    );
  };

  const UnverifiedSignUpContent = () => {
    return (
      <Form
        style={{ position: "relative", top: "30px" }}
        onSubmit={handleSubmit(signUpSubmit)}
        className={`mt-4 p-2 ${formHasErrors ? "error" : ""}`}
      >
        {signUpFormFieldsMeta.map((field) => {
          return (
            <SignUpInput
              type={field.type}
              placeholder={field.placeholder}
              key={field.id}
              name={field.name}
              required={field.required}
              value={field.value}
            />
          );
        })}
        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            className="authentication-button sign-up onboarding"
          >
            <div className="text-white">Sign Up</div>
          </button>
        </div>
      </Form>
    );
  };

  const formValues = watch();

  const formHasErrors = Object.keys(errors).length > 0;

  return (
    <div className={`container mt-5`}>
      {needsVerification ? (
        <Verification
          email={currentUser.email}
          submitVerificationCodeHandler={submitVerificationCode}
        />
      ) : (
        <UnverifiedSignUpContent />
      )}
    </div>
  );
}
