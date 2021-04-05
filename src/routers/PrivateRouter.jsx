import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ auth, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        auth.log ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;
