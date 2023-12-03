import React from "react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";

export default function SignInContent({ forgotPasswordTrigger }) {
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
    <div className="container mt-5">
      <h2 className="mb-4"> Sign In </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Email Address"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </Form.Group>

        <Button type="submit" className="float-end">
          Sign In
        </Button>
      </Form>

      <Link onClick={() => forgotPasswordTrigger(true)}>Forgot Password?</Link>
    </div>
  );
}
