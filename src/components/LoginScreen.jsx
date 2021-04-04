import React from "react";

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace("/");
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
