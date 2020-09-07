import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Home} />
      <Route path="/saved" exact component={MyBooks} />
    </Switch>
  );
};

export default Routes;
