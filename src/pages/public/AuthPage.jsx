import React from "react";
import { useSelector } from "react-redux";
import Login from "../../components/Auth/Login";
import Resgister from "../../components/Auth/Resgister";

const AuthPage = () => {
  const { loginFlag } = useSelector((state) => state.auth);

  return <div>{loginFlag ? <Login /> : <Resgister />}</div>;
};

export default AuthPage;
