import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Drawer, Hidden, List, ListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";

const useStyles = makeStyles({
  drawer: {
    top: "8rem !important",
    "& > .MuiBackdrop-root": {
      top: "8rem !important",
      //   display: "none",
    },
    "& > .MuiDrawer-paper": {
      left: 0,
      top: "8rem !important",
      boxShadow: "none !important",
      background: "rgba(255, 255, 255, 1)",
      color: "#000",
      padding: 0,
      width: "65vw",
      height: "calc(90vh - 8rem)",
      "& ul": {
        padding: 0,
        width: "100% !important",
        height: "100%",
        position: "relative",
        "& .navIcon": {
          fontSize: "2.5rem",
          color: "#000",
        },
        "& .menuIcon": {
          fontSize: "3rem",
          color: "#000",
        },
        "& .mCIcon": {
          fontSize: "2.5rem",
          color: "#000",
          marginRight: "3rem",
        },
        // "& .link:focus-within": {
        //   backgroundColor: "rgba(240, 240, 240, 1) !important",
        // },
        "& .mTopMenu": {
          marginTop: "3.5rem",
        },
      },
      "& ul > li": {
        padding: "0 3rem",
        height: "fit-content",
        display: "block",
      },
    },
  },
});

export default function ShopSideBar(props) {
  const classes = useStyles();
  const { openFilter } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Hidden smUp>
      <div
        className="cursor-pointer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        {openFilter}
      </div>
      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        className={classes.drawer}
        anchor="left"
      >
        <List classes={classes.ulStyle}>
          <ListItem
            style={{
              top: 0,
              zIndex: 100,
              height: "fit-content",
              position: "sticky",
              background: "rgba(255, 255, 255, 1)",
              padding: "2rem",
              paddingBottom: "3.5rem",
            }}
          >
            <div className="navigationContainer d-flex justify-content-between align-items-center">
              {/* <Notifications className="navIcon" /> */}
              <CloseIcon
                className="navIcon cursor-pointer"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
            <div></div>
          </ListItem>
          <ListItem>{props.children}</ListItem>
        </List>
      </Drawer>
    </Hidden>
  );
}
