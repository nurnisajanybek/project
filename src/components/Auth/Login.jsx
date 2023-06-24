import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/auth/authActions";
import {
  setEmail,
  setLoginFlag,
  setPassword,
} from "../../store/auth/authSlice";

const Login = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }

    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleLogin(obj));
  };

  return (
    <div>
      <h3>log in </h3>
      <form onSubmit={handleUser}>
        <input
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        {emailError && (
          <p
            style={{
              width: "80%",
              color: "red",
              marginBottom: "10px",
            }}
          >
            {emailError}
          </p>
        )}

        <input
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        {passwordError && (
          <p
            style={{
              width: "80%",
              color: "red",
              marginBottom: "10px",
            }}
          >
            {passwordError}
          </p>
        )}
        <button type="submit">Log in</button>
      </form>
      {showError ? <h6 style={{ color: "red" }}>Заполните все поля</h6> : <></>}
      <p
        style={{
          color: "lightGrey",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => dispatch(setLoginFlag(false))}
      >
        Dont have an account?
      </p>
    </div>
  );
};

export default Login;
