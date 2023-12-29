import React from "react";
import inputBottomBorderImage from "../../static/img/line-6.png";
import { Link } from "react-router-dom";

export default function SignInFormContent({ forgotPasswordTrigger }) {
  return (
    <>
      <div className="overlap-91">
        <img className="line-32" alt="Line" src={inputBottomBorderImage} />
        <input
          className="authentication-form-control"
          placeholder="Enter Username"
          name="username"
        />
      </div>
      <div className="overlap-92">
        <img className="line-32" alt="Line" src={inputBottomBorderImage} />
        <input
          className="authentication-form-control"
          placeholder="Enter Password"
        />
      </div>
      {/* Button to login*/}
      <Link className="group-141" to="/log-in-4">
        <div className="text-wrapper-183">Log In</div>
      </Link>
    </>
  );
}
