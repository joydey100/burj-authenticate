import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // state declare
  const [isCheck, setIsCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { googleSignIn, createUser, signInUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      history.push(uri);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password Should have at lease 6 Character");
      return;
    }

    isCheck ? createUser(email, password) : signInUser(email, password);
  };

  return (
    <Container align="center">
      <h1>{isCheck ? "Register" : "Login"}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter Email Address"
          required
          onBlur={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          required
          onBlur={(e) => setPassword(e.target.value)}
        />{" "}
        <div> {error} </div>
        <br />
        <input
          type="checkbox"
          id="checkbox"
          onClick={(e) => {
            setIsCheck(e.target.checked);
          }}
        />{" "}
        <label htmlFor="checkbox">No Account? Register Now</label> <br /> <br />
        <Button variant="contained" color="primary" type="submit">
          {isCheck ? "Register" : "Log in"}
        </Button>
      </form>
      <br /> <br />
      Or,
      <br /> <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleGoogleSignIn}
      >
        {" "}
        Sign In with Google{" "}
      </Button>
    </Container>
  );
};

export default Login;
