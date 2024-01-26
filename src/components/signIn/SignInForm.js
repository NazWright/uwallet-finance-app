import React from "react";
import inputBottomBorderImage from "../../static/img/line-6.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { Button } from "react-bootstrap";

export default function SignInFormContent({ forgotPasswordTrigger }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.info("Authenticating user from sign in: ");
    try {
      const authenticatedUserMeta = await Auth.signIn(
        data.email,
        data.password
      );
      const user = {
        username: authenticatedUserMeta.username,
        email: authenticatedUserMeta.attributes.email,
        phone_number: authenticatedUserMeta.attributes.phone_number,
        family_name: authenticatedUserMeta.attributes.family_name,
        given_name: authenticatedUserMeta.attributes.given_name,
        password: data.password,
      };

      dispatch(setUser(user));
      //triggerVerification();
      dispatch(setAuthenticated(true));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overlap-91">
          <img className="line-32" alt="Line" src={inputBottomBorderImage} />
          <input
            className="authentication-form-control"
            placeholder="Enter Email Address"
            name="email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="overlap-92">
          <img className="line-32" alt="Line" src={inputBottomBorderImage} />
          <input
            className="authentication-form-control"
            placeholder="Enter Password"
            type="password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </div>

        {/* Button to login*/}
        <button className="group-141 onboarding">
          <div className="text-wrapper-183">Log In</div>
        </button>
      </form>
    </>
  );
}
