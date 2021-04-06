import { useContext } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import LoginScreen from "../components/LoginScreen";
import { LogContext } from "../contex/LogContext";
import PrivateRouter from "./PrivateRouter";
import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  const { log } = useContext(LogContext);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default LoginRouter;
