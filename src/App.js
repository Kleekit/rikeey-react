import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/shop" exact component={Shop} />
    </Switch>
  );
}

export default App;
