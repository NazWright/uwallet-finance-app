import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Verification from "../shared/verification/Verification";
import { Auth } from "aws-amplify";
import SignInContent from "./SignInContent";

export default function SignIn() {
  //   const [needsVerification, setNeedsVerification] = useState(false);
  //   const dispatch = useDispatch();

  //   const submitVerificationCode = async (data) => {
  //     // confirm sign in
  //     // set authenticated to true
  //     if (!data.verificationCode) return;
  //     try {
  //       const authenticatedUserMeta = await Auth.currentAuthenticatedUser();
  //       console.log(authenticatedUserMeta);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div>
      <SignInContent />
    </div>
  );
}
