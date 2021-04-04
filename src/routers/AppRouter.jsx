import React from "react";
import { Redirect, Route, Switch } from "react-router";
import CharacterScreen from "../components/CharacterScreen";
import ManScreen from "../components/ManScreen";
import Navbar from "../components/Navbar";
import SearchScreen from "../components/SearchScreen";
import WomanScreen from "../components/WomanScreen";

const AppRouter = ({ history }) => {
  return (
    <div>
      <Navbar history={history} />
      <Switch>
        <Route exact path="/mans" component={ManScreen} />
        <Route
          exact
          path="/character/:characterId"
          component={CharacterScreen}
        />
        <Route exact path="/womans" component={WomanScreen} />
        <Route exact path="/search" component={SearchScreen} />

        <Redirect to="/mans" />
      </Switch>
    </div>
  );
};

export default AppRouter;
