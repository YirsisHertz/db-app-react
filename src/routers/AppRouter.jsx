import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import Navbar from "../components/Navbar";

const ManScreen = lazy(() => import("../components/ManScreen"));
const WomanScreen = lazy(() => import("../components/WomanScreen"));
const SearchScreen = lazy(() => import("../components/SearchScreen"));
const CharacterScreen = lazy(() => import("../components/CharacterScreen"));

const AppRouter = () => {
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={
          <div>
            <h2>Loading...</h2>
          </div>
        }
      >
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
      </Suspense>
    </div>
  );
};

export default AppRouter;
