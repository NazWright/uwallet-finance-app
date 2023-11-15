import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordLink({ navigateTo }) {
  return (
    <div>
      <Link to={navigateTo}>forgot your password?</Link>
    </div>
  );
}
