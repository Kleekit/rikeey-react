import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Callback from "./pages/Callback";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import FeedBack from "./pages/FeedBack";
import LandingPage from "./pages/LandingPage";
import Payment from "./pages/Payment";
import Reference from "./pages/Reference";
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
      <Route path="/IKnU" exact component={FeedBack} />
      <Route path="/callback" exact component={Callback} />
      <Route path="/rik/:reference" exact component={Reference} />
    </Switch>
  );
}

export default App;
