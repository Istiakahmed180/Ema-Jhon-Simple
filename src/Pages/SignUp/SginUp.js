import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import "./SignUp.css";

const SginUp = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassd, setConfirmPassd] = useState("");

  const { createUser, signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubnmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // set email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("You have entered an invalid email address!");
      return;
    }
    setEmailError("");

    // set password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError(
        "The password must contain at least 1 uppercase alphabetical character"
      );
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError(
        "The password must contain at least 1 lowercase alphabetical character"
      );
      return;
    }

    if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError(
        "The password must contain at least 1 numeric character"
      );
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordError(
        "The password must contain at least one special character"
      );
      return;
    }

    if (!/(?=.{8,})/.test(password)) {
      setPasswordError("The password must be eight characters or longer");
      return;
    }
    setPasswordError("");

    // set confirm password validation
    if (password !== confirmPassword) {
      setConfirmPassd("Your confirm password din not did't mathch");
      return;
    }
    setConfirmPassd("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-outside-div"></div>
      <div className="signup-form-container">
        <h1 className="signup-form-title">Sign Up</h1>

        <form onSubmit={handleSubnmit}>
          <div className="signup-form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <small className="signup-error">{emailError && emailError}</small>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <small className="signup-error">
            {passwordError && passwordError}
          </small>

          <div className="form-control">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" />
          </div>

          <small className="signup-error">{confirmPassd && confirmPassd}</small>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p className="login-control">
          Already have an account?{" "}
          <Link to={"/login"} className="login-link">
            Login
          </Link>
        </p>

        <hr />

        <div onClick={handleGoogleSignIn} className="signup-google-login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default SginUp;
