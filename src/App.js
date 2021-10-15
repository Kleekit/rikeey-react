import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import LandingPage from "./pages/LandingPage";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";

function App() {
  return (
    <Switch>
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
