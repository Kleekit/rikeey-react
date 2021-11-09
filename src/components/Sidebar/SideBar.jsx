import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Badge,
  Button,
  // Collapse,
  Drawer,
  Hidden,
  InputBase,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
// import Notifications from "@mui/icons-material/NotificationsNoneRounded";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
// import CollapseIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import ExpandIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import clsx from "clsx";
// import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  largeIcon: {
    fontSize: "3.5rem !important",
  },
  drawer: {
    // "& > .MuiBackdrop-root": {
    //   top: "10rem !important",
    // },
    "& > .MuiDrawer-paperAnchorRight": {
      left: 0,
      // top: "10rem !important",
      boxShadow: "0 0.1rem 0.4rem rgb(0 0 0 .1)",
      background: "rgba(255, 255, 255, 1)",
      color: "#000",
      padding: 0,
      // height: "calc(100% - 10rem)",
      height: "100%",
      "& ul": {
        padding: 0,
        width: "100% !important",
        height: "100%",
        position: "relative",
        "& .navIcon": {
          fontSize: "3.5rem",
          color: "#000",
          "@media (max-width: 420px)": {
            fontSize: "3rem",
          },
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
        // "& .navigationContainer": {},
        "& .menuContainer": {
          // fontSize: "3rem",
          marginTop: "4.5rem",
          marginRight: "-3rem",
          paddingBottom: "3.5rem",
        },
        "& .menuItem": {
          background: "inherit",
          color: "inherit",
          fontSize: "initial",
          borderRadius: "unset",
          boxShadow: "none",
          marginBottom: "5rem",
          "@media (max-width: 420px)": {
            marginBottom: "3.8rem",
          },
        },
        "& .menuItemHeader": {
          fontSize: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
          padding: "1rem",
          paddingRight: "3rem",
          "@media (max-width: 420px)": {
            fontSize: "2rem",
          },
        },
        "& .menuItemContent": {
          fontSize: "2.2rem",
          fontWeight: 400,
          paddingTop: "1rem",
          paddingLeft: "1.8rem",
          "@media (max-width: 420px)": {
            fontSize: "1.8rem",
          },
        },
        "& .contentList": {
          marginBottom: "2.5rem",
          padding: "1.1rem",
          display: "block",
          "@media (max-width: 420px)": {
            marginBottom: "1.5rem",
          },
        },
        "& .link:focus-within": {
          backgroundColor: "rgba(240, 240, 240, 1) !important",
        },
        "& .sidebarBottom": {
          marginTop: "8rem",
          marginBottom: 0,
        },
        "& .searchBar": {
          marginTop: "2.8rem",
          padding: "0.5rem 2.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "0.01rem solid #000",
          borderRadius: "8rem",
          "& .searchInput": { fontSize: "1.7rem", color: "inherit" },
          "& .searchIcon": { width: "2.6rem", height: "2.6rem", color: "#000" },
          "& customButton": { minWidth: "unset" },
        },
        "& .mTopMenu": {
          marginTop: "3.5rem",
        },
        "& .MuiBadge-root": {
          "& > .MuiBadge-badge": {
            top: "10%",
            right: "-35%",
            height: "2.1rem",
            minWidth: "2.1rem",
            fontSize: "1.2rem",
            border: "0.1rem solid rgb(233, 233, 233)",
            background: "rgb(119, 80, 80)",
            fontWeight: 700,
          },
        },
      },
      "& ul > li": {
        padding: "0 3rem",
        height: "100%",
        display: "block",
      },
    },
  },
});

export default function SideBar() {
  const classes = useStyles();

  const [count, setCount] = React.useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const [openWomen, setOpenWomen] = React.useState(true);

  // const handleWomenClick = () => {
  //   setOpenWomen(!openWomen);
  // };

  // const [openMen, setOpenMen] = React.useState(true);

  // const handleMenClick = () => {
  //   setOpenMen(!openMen);
  // };

  return (
    <Hidden smUp>
      <MenuRoundedIcon
        className={clsx(classes.largeIcon, "cursor-pointer")}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        className={classes.drawer}
        // onClose={toggleDrawer(anchor, false)}
      >
        <List classes={classes.ulStyle}>
          <ListItem
            style={{
              top: 0,
              zIndex: 100,
              height: "fit-content",
              position: "sticky",
              background: "rgba(255, 255, 255, 1)",
              paddingTop: "3rem",
              paddingBottom: "2rem",
            }}
          >
            <div className="navigationContainer d-flex justify-content-between align-items-center">
              <Badge overlap="circular" color="primary" badgeContent={count}>
                <Link to="/cart">
                  <ShoppingCart
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    className="navIcon cursor-pointer"
                  />
                </Link>
              </Badge>
              <CloseIcon
                className="navIcon cursor-pointer"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
            <div></div>
          </ListItem>
          <ListItem>
            <div className=" searchBar" component="form">
              <InputBase className="searchInput w-100" placeholder="Search" />
              <Button className="customButton">
                <SearchIcon className="searchIcon" />
              </Button>
            </div>
            <div className="menuContainer">
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/">
                  Home
                </Link>
              </div>
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/shop">
                  Shop
                </Link>
              </div>
              {/* <div className="menuItem">
                <div
                  className="menuItemHeader link"
                  tabIndex="1"
                  type="button"
                  onClick={handleWomenClick}
                >
                  <span>Women Active Wear</span>
                  {openWomen ? (
                    <ExpandIcon className="menuIcon" />
                  ) : (
                    <CollapseIcon className="menuIcon" />
                  )}
                </div>
                <Collapse in={!openWomen} timeout="auto" unmountOnExit>
                  <div className="menuItemContent ">
                    <Link className="contentList link" to="/shop">
                      Fullset
                    </Link>
                    <Link className="contentList link" to="/shop">
                      Tops & Bra tops
                    </Link>
                    <Link className="contentList mb-0 link" to="/shop">
                      Buttoms
                    </Link>
                  </div>
                </Collapse>
              </div>
              <div className="menuItem ">
                <div
                  className="menuItemHeader link"
                  tabIndex="1"
                  type="button"
                  onClick={handleMenClick}
                >
                  <span>Men Active Wear</span>
                  {openMen ? (
                    <ExpandIcon className="menuIcon" />
                  ) : (
                    <CollapseIcon className="menuIcon" />
                  )}
                </div>
                <Collapse in={!openMen} timeout="auto" unmountOnExit>
                  <div className="menuItemContent ">
                    <Link className="contentList link" to="/shop">
                      Tops
                    </Link>
                    <Link className="contentList mb-0 link" to="/shop">
                      Buttoms
                    </Link>
                  </div>
                </Collapse>
              </div>
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/shop">
                  Waist Trainer
                </Link>
              </div>
              <div className="menuItem mb-0">
                <Link className="menuItemHeader link" to="/shop">
                  Fitness Equipment
                </Link>
              </div> */}
            </div>
          </ListItem>
        </List>
      </Drawer>
    </Hidden>
  );
}
