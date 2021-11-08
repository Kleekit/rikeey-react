import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RikeeyLogo from "../Reuseable/RikeeyLogo";
import { Badge, Grid, Hidden } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import SideBar from "../Sidebar/SideBar";
import clsx from "clsx";
import { apiCaller } from "../../apiCaller/apicaller";
import { useMutation, useQuery } from "react-query";
import { getCartItem } from "../../methods/cart.method";

const useStyles = makeStyles({
  root: {
    "& .navigation": {
      height: "8rem",
      padding: "0 7vw",
      background: "#F6F6F6",
    },
    "& .logo-container": {
      width: "4rem",
    },
    "& .logo-img": {
      height: "100%",
    },
    "& .menuLink": {
      "@media (max-width: 650px)": {
        maxWidth: "37%",
        flexBasis: "37%",
      },
    },
    "& .menuContainer": {
      fontSize: "1.8rem",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .search-nav": {
      borderBottom: "0.03rem solid black",
    },
    "& .sideBarNav": {
      padding: "0 7vw",
    },
    "& .MuiBadge-root": {
      "& > .MuiBadge-badge": {
        top: "28%",
        right: "-33%",
        height: "2.1rem",
        minWidth: "2.1rem",
        fontSize: "1.2rem",
        background: "rgb(119, 80, 80)",
        fontWeight: 700,
      },
    },
  },
});

function NavBar() {
  const classes = useStyles();

  const [count, setCount] = React.useState(0);

  const { data, isLoading, isError } = useQuery("getCartItem", getCartItem);

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={clsx("bg-nav navigation fixed-top")}
        >
          <Grid items sm={2} md={2}>
            <Link className="logo-container d-block" to="/">
              <RikeeyLogo />
            </Link>
          </Grid>
          <Grid className="menuContainer menuLink" items sm={4} md={3}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Badge
              overlap="circular"
              color="primary"
              badgeContent={data ? data.body.length : 0}
            >
              <Link
              // onClick={() => {
              //   // setCount(count + 1);
              //   getCartItems();
              // }}
              // to="/cart"
              >
                Cart
              </Link>
            </Badge>
          </Grid>
          <Grid items sm={2} md={2}>
            <div className="input-group search-nav">
              <label className="search-nav-label my-auto me-2">
                <SearchIcon fontSize="large" />
              </label>
              <input
                type="text"
                className="form-control btn-sm small no-box-shadow bg-transparent border-none"
                placeholder="Search"
              />
            </div>
          </Grid>
        </Grid>
      </Hidden>
      <div className="navigation sideBarNav d-flex justify-content-between align-items-center">
        <Link className="logo-container d-block" to="/">
          <RikeeyLogo />
        </Link>
        <SideBar />
      </div>
    </div>
  );
}

export default NavBar;
