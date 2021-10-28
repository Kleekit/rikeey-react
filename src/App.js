import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import LandingPage from "./pages/LandingPage";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";

function App() {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path="/" exact component={LandingPage} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/details" exact component={Details} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/checkout/payment" exact component={Payment} />
    </Switch>
  );
}

export default App;
