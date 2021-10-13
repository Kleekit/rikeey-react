import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import "../LandingPage/landing.css";
import "../LandingPage/queries.css";

const useStyles = makeStyles({
  root: {
    "& .contentContainer": {
      position: "fixed",
      top: "8rem",
      width: "100vw",
      height: "calc(100% - 8rem)",
      overflow: "hidden",
    },
    "& .content": {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "100%",
    },
    "& .mainContainer": {
      fontSize: "1.5rem",
      paddingBottom: "15rem",
    },
  },
});

function CustomContainer(props) {
  const classes = useStyles();
  const { customStyle } = props;

  return (
    <div className={classes.root}>
      <NavBar />
      <div className="contentContainer">
        <div className="content">
          <div className={clsx(customStyle, "mainContainer")}>
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CustomContainer;
