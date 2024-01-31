import React, { useState } from "react";
import SignInContent from "./SignInContent";
import ForgotPasswordForm from "../shared/forgot-password/ForgotPasswordForm";

export default function SignIn({ setLoading }) {
  const [hasForgotPassword, setHasForgotPassword] = useState(false);

  return (
    <>
      {hasForgotPassword && (
        <ForgotPasswordForm backToLoginTrigger={setHasForgotPassword} />
      )}

      {!hasForgotPassword && (
        <SignInContent
          setLoading={setLoading}
          forgotPasswordTrigger={setHasForgotPassword}
        />
      )}
    </>
  );
}
