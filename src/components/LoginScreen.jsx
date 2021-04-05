import React, { useContext } from "react";
import { LogContext } from "../contex/LogContext";
import { types } from "../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(LogContext);

  const handleLogin = () => {
    dispatch({ type: types.login });

    history.push("/");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animate" />
      <h1 className="my-3">Login Screen</h1>
      <button onClick={handleLogin} className="btn btn-primary ">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
