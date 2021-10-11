import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "../LandingPage/landing.css";
import "../LandingPage/queries.css";

function CustomContainer(props) {
  const { customStyle } = props;

  return (
    <div>
      <NavBar />
      <div className={`main-content ${customStyle}`}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default CustomContainer;
