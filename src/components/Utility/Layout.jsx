import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/styles";
import { getOrStoreId } from "../../helpers/getOrStore.helper";
import clsx from "clsx";
import "../LandingPage/landing.css";
import "../LandingPage/queries.css";
import { generateRandomString } from "../../helpers/generateRandomString";

const useStyles = makeStyles({
  root: {
    "& .contentContainer": {
      position: "fixed",
      top: "7rem",
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
      background: "rgba(250, 250, 250, 0.3)",
    },
  },
});

export default function Layout(props) {
  const classes = useStyles();
  const { customStyle } = props;

  const LookForId = () => {
    const id = getOrStoreId();
    if (!id) {
      const t = new Date().getTime().toString();
      getOrStoreId(generateRandomString({ name: t, length: 12 }));
    }
  };

  useEffect(() => {
    LookForId();
  }, []);

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
