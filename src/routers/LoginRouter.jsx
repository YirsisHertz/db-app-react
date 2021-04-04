import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "../components/LoginScreen";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />

        <Route path="/" component={AppRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default LoginRouter;
