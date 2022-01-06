import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Ekama from "./components/ekama/ekama";
import Accessories from "./pages/Accessories";
import Callback from "./pages/Callback";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import FeedBack from "./pages/FeedBack";
import LandingPage from "./pages/LandingPage";
import Men from "./pages/Men";
import NewReleases from "./pages/NewReleases";
import Payment from "./pages/Payment";
import Reference from "./pages/Reference";
import Shop from "./pages/Shop";
import Women from "./pages/Women";

function App() {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path="/" exact component={LandingPage} />
      <Route path="/ekama" exact component={Ekama} />
      <Route path="/men" exact component={Men} />
      <Route path="/women" exact component={Women} />
      <Route path="/accessories" exact component={Accessories} />
      <Route path="/new-releases" exact component={NewReleases} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:category" exact component={Shop} />
      {/* <Route path="/details" exact component={Details} /> */}
      <Route path="/details/:productId" exact component={Details} />
      <Route path="/shop/:category/:subCategory" exact component={Shop} />
      {/* <Route path="/shop/:details" exact component={Details} /> */}
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
