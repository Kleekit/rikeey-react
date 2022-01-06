import React from "react";
import { Link } from "react-router-dom";
import RikeeyLogo from "../Reuseable/RikeeyLogo";
import { Badge, Grid, Hidden } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import SideBar from "../Sidebar/SideBar";
import clsx from "clsx";
// import { apiCaller } from "../../apiCaller/apicaller";
import { useQuery } from "react-query";
import { getCartItem } from "../../methods/cart.method";

const useStyles = makeStyles({
  root: {
    "& .navigation": {
      height: "7rem",
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

  // const [count, setCount] = React.useState(0);

  const { data } = useQuery("getCartItem", getCartItem);

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <div className="grid grid-cols-6 items-center w-full h-[7rem] px-[7vw] fixed top-0 border-b-[0.15rem] border-[#5E6368]">
          <div className="flex col-span-3 justify-between">
            <Link className="w-[3rem] block " to="/">
              <RikeeyLogo />
            </Link>
            <div className="menuContainer menuLink w-[70%]">
              {/* <Link to="/">Home</Link> */}
              {/* <Link to="/shop">Shop</Link> */}
              <Link to="/new-releases">New Releases</Link>
              <Link to="/women">Women</Link>
              <Link to="/men">Men</Link>
              <Link to="/accessories">Accessories</Link>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-1 flex justify-end">
            <Badge
              overlap="circular"
              color="primary"
              badgeContent={data ? data.body.length : 0}
            >
              <Link to="/cart">Cart</Link>
            </Badge>
          </div>
          {/* <Grid item={true} sm={2} md={2}>
            <div className="input-group search-nav">
              <label className="search-nav-label my-auto mr-2">
                <SearchIcon fontSize="large" />
              </label>
              <input
                type="text"
                className="form-control btn-sm small no-box-shadow bg-transparent border-none"
                placeholder="Search"
              />
            </div>
          </Grid> */}
        </div>
      </Hidden>
      <div className="navigation sideBarNav flex justify-between items-center">
        <Link className="logo-container sm:hidden w-[3rem] block" to="/">
          <RikeeyLogo />
        </Link>
        <SideBar />
      </div>
    </div>
  );
}

export default NavBar;

{
  /* <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="h-[7rem] px-[7vw] fixed top-0 border-b-[0.15rem] border-[#5E6368]"
        >
          <Grid item={true} sm={2} md={2}>
            <Link className="w-[3rem] block" to="/">
              <RikeeyLogo />
            </Link>
          </Grid>
          <Grid className="menuContainer menuLink" item={true} sm={4} md={5}>
            
            <Link to="/new-releases">New Releases</Link>
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/accessories">Accessories</Link>
          </Grid>
          <Grid item={true} sm={2} md={2}>
            <Badge
              overlap="circular"
              color="primary"
              badgeContent={data ? data.body.length : 0}
            >
              <Link to="/cart">Cart</Link>
            </Badge>
          </Grid>
          <Grid item={true} sm={2} md={2}>
            <div className="input-group search-nav">
              <label className="search-nav-label my-auto mr-2">
                <SearchIcon fontSize="large" />
              </label>
              <input
                type="text"
                className="form-control btn-sm small no-box-shadow bg-transparent border-none"
                placeholder="Search"
              />
            </div>
          </Grid>
        </Grid> */
}
