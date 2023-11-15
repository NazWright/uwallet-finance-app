import React, { useState } from "react";
import SignInContent from "./SignInContent";
import ForgotPasswordForm from "../shared/forgot-password/ForgotPasswordForm";

export default function SignIn() {
  const [hasForgotPassword, setHasForgotPassword] = useState(false);

  return hasForgotPassword ? (
    <ForgotPasswordForm backToLoginTrigger={setHasForgotPassword} />
  ) : (
    <SignInContent forgotPasswordTrigger={setHasForgotPassword} />
  );
}
