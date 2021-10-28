import React, { useEffect } from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Collapse, Divider, Grid, Hidden, Pagination } from "@mui/material";
import ShopSideBar from "../components/Shop/ShopSidebar";
import CollapseIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useMutation, useQuery } from "react-query";
import { getProduct } from "../methods/product.method";
import { getOrStoreId } from "../helpers/getOrStore.helper";

const useStyles = makeStyles({
  root: {
    "& .menuContainer": {
      fontSize: "1.7rem",
      marginTop: "3.5rem",
    },
    "& .menuItem": {
      width: "90%",
      background: "inherit",
      color: "inherit",
      fontSize: "initial",
      borderRadius: "unset",
      boxShadow: "none",
      marginBottom: "2rem",
      "@media (max-width: 960px)": {
        width: "95%",
      },
    },
    "& .menuItemHeader": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 600,
    },
    "& .menuItemContent": {
      fontSize: "1.8rem",
      fontWeight: 400,
      paddingTop: ".5rem",
      paddingLeft: "1rem",
    },
    "& .contentList": {
      marginBottom: ".5rem",
      padding: ".5rem",
      display: "block",
    },
    "& .shopRow": {
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "flex-start",
    },
    "& .shop-col": {
      flexGrow: 0,
      maxWidth: "30%",
      flexBasis: "30%",
      "@media (max-width: 600px)": {
        maxWidth: "46%",
        flexBasis: "46%",
      },
    },
    "& .shopItemImg": {
      marginBottom: "3rem",
      height: "50vh",
      "@media (max-width: 600px)": {
        height: "37vh",
      },
      "@media (max-width: 480px)": {
        height: "27vh",
      },
    },
    "& .filterHead": {
      width: "97%",
      display: "flex",
      justifyContent: "space-between",
    },
    "& .filterBarLinks": {
      margin: "0 auto",
      marginBottom: "3.8rem",
      width: "60%",
      fontSize: "1.8rem",
      "@media (max-width: 960px)": {
        width: "90%",
      },
      "@media (max-width: 600px)": {
        margin: "0rem",
        width: "100%",
        // fontSize: "1.8rem",
      },
    },
    "& .filterBorderBl": {
      "@media (max-width: 960px)": {
        marginBottom: "3rem",
      },
    },
    "& .filter-mn": {
      paddingBottom: "1rem",
    },
    "& .filterSubLinks > div": {
      marginBottom: "1.5rem",
    },
    "& .pagination": {
      marginTop: "8rem",
      "& .MuiPaginationItem-root": {
        minWidth: "4rem",
        height: "4rem",
        fontSize: "1rem",
        "@media (max-width: 420px)": {
          minWidth: "3.4rem",
          height: "3.4rem",
        },
        "@media (max-width: 320px)": {
          minWidth: "3rem",
          height: "3rem",
        },
      },
    },
  },
});

function Shop() {
  const { isLoading, isError, data } = useQuery("getProduct", getProduct);

  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 d-flex`,
  };
  const items = data;

  //
  //

  if (isError) {
    <h1>Something Went Wrong</h1>;
  }

  return (
    <CustomContainer {...customConfig}>
      <Grid container justifyContent="space-between">
        <ShopSideBar openFilter={openFilter}>
          <div className={classes.root}>
            <FilterTop />
          </div>
        </ShopSideBar>
        <Hidden mdDown>
          <Grid items xs={12} sm={12} md={3} className="filter-col pe-0">
            <div className="filter-content fs-large pb-5 fw-500 ">
              <FilterTop />
              <FilterBottom />
            </div>
          </Grid>
        </Hidden>
        <Grid items xs={12} sm={12} md={9} className="shop-catalog ">
          {isLoading ? (
            <h3>loading....</h3>
          ) : (
            <Category categoryTitle={"Tega's Shoes"} items={data} />
          )}
          <div className="d-l-none pagination d-flex justify-content-center">
            <Hidden mdUp>
              <Pagination count={10} variant="outlined" color="primary" />
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

const openFilter = () => {
  return (
    <div className="open-filter">
      <svg
        width="68"
        height="25"
        viewBox="0 0 64 13"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M7.71 0.724999V2.99C7.71 3.44 7.39 3.635 6.75 3.575L6.615 1.865L3.57 1.76V5.39L6.255 5.075C6.365 5.555 6.37 6.05 6.27 6.56L3.57 6.41V9.935L4.95 10.025C5.01 10.675 4.785 11 4.275 11H0.6C0.6 11 0.6 10.96 0.6 10.88C0.6 10.33 0.82 10.035 1.26 9.995L1.695 9.965V1.79L0.615 1.7C0.585 1.64 0.59 1.505 0.63 1.295C0.72 0.914999 0.94 0.724999 1.29 0.724999H7.71ZM11.7645 11H8.41945V10.88C8.41945 10.33 8.63945 10.035 9.07945 9.995L9.54445 9.965V4.52L8.95945 4.46C8.54945 4.42 8.36445 4.11 8.40445 3.53L11.3745 3.2V9.935L12.4395 10.025C12.4995 10.675 12.2745 11 11.7645 11ZM11.4495 1.415C11.4495 1.725 11.3445 1.99 11.1345 2.21C10.9245 2.42 10.6595 2.525 10.3395 2.525C10.0295 2.525 9.76445 2.42 9.54445 2.21C9.33445 1.99 9.22945 1.725 9.22945 1.415C9.22945 1.105 9.33445 0.845 9.54445 0.634999C9.76445 0.414999 10.0295 0.304999 10.3395 0.304999C10.6495 0.304999 10.9095 0.414999 11.1195 0.634999C11.3395 0.845 11.4495 1.105 11.4495 1.415ZM16.5545 11H13.2095V10.88C13.2095 10.33 13.4295 10.035 13.8695 9.995L14.3345 9.965V1.595L13.7495 1.535C13.3395 1.495 13.1545 1.185 13.1945 0.605L16.1645 0.274999V9.935L17.2295 10.025C17.2895 10.675 17.0645 11 16.5545 11ZM20.6395 4.475V8.63C20.6395 9.44 20.8995 9.845 21.4195 9.845C21.7995 9.845 22.1145 9.795 22.3645 9.695C22.6245 9.595 22.8995 9.425 23.1895 9.185C23.2395 9.185 23.3045 9.25 23.3845 9.38C23.4645 9.51 23.5045 9.65 23.5045 9.8C23.5045 10.19 23.2295 10.525 22.6795 10.805C22.1295 11.085 21.5945 11.225 21.0745 11.225C20.5545 11.225 20.1445 11.15 19.8445 11C19.5445 10.86 19.3195 10.65 19.1695 10.37C18.9295 9.91 18.8095 9.3 18.8095 8.54V4.475H17.5645C17.5645 3.775 17.8095 3.425 18.2995 3.425H18.8095V1.505L20.6395 1.31V3.425H23.3395C23.3595 3.575 23.3445 3.745 23.2945 3.935C23.2045 4.295 22.9745 4.475 22.6045 4.475H20.6395ZM26.1019 7.325V7.49C26.1019 8.3 26.2469 8.905 26.5369 9.305C26.8369 9.695 27.3469 9.89 28.0669 9.89C28.7969 9.89 29.5119 9.615 30.2119 9.065C30.4119 9.215 30.5119 9.45 30.5119 9.77C30.5119 10.08 30.2319 10.4 29.6719 10.73C29.1219 11.06 28.4319 11.225 27.6019 11.225C26.5219 11.225 25.6819 10.91 25.0819 10.28C24.4919 9.64 24.1969 8.675 24.1969 7.385C24.1969 6.085 24.5169 5.065 25.1569 4.325C25.8069 3.575 26.6969 3.2 27.8269 3.2C28.7869 3.2 29.5019 3.5 29.9719 4.1C30.4519 4.7 30.6819 5.49 30.6619 6.47V7.325H26.1019ZM27.6619 4.4C26.8419 4.4 26.3469 5.03 26.1769 6.29H28.9069C28.8869 5.61 28.7719 5.125 28.5619 4.835C28.3519 4.545 28.0519 4.4 27.6619 4.4ZM34.4729 4.52C34.7129 4.2 35.0529 3.9 35.4929 3.62C35.9429 3.34 36.3279 3.2 36.6479 3.2C36.9779 3.2 37.2529 3.305 37.4729 3.515C37.6929 3.725 37.8029 4.075 37.8029 4.565C37.8029 5.045 37.6379 5.43 37.3079 5.72C37.1379 5.85 36.8529 5.89 36.4529 5.84C36.4529 5.51 36.4229 5.26 36.3629 5.09C36.3029 4.91 36.2379 4.805 36.1679 4.775C36.0979 4.735 36.0029 4.715 35.8829 4.715C35.3829 4.715 34.9329 5.04 34.5329 5.69V9.935L35.7479 10.025C35.8079 10.675 35.5829 11 35.0729 11H31.6079C31.6079 11 31.6079 10.96 31.6079 10.88C31.6079 10.33 31.8279 10.035 32.2679 9.995L32.7029 9.965V4.595L32.0429 4.52C31.7329 4.49 31.5779 4.19 31.5779 3.62L34.2929 3.275L34.4279 4.52H34.4729Z"
          fill="#730F11"
        />
        <path
          d="M52 11.75C52 11.5511 52.079 11.3603 52.2197 11.2197C52.3603 11.079 52.5511 11 52.75 11H57.25C57.4489 11 57.6397 11.079 57.7803 11.2197C57.921 11.3603 58 11.5511 58 11.75C58 11.9489 57.921 12.1397 57.7803 12.2803C57.6397 12.421 57.4489 12.5 57.25 12.5H52.75C52.5511 12.5 52.3603 12.421 52.2197 12.2803C52.079 12.1397 52 11.9489 52 11.75ZM49 7.25C49 7.05109 49.079 6.86032 49.2197 6.71967C49.3603 6.57902 49.5511 6.5 49.75 6.5H60.25C60.4489 6.5 60.6397 6.57902 60.7803 6.71967C60.921 6.86032 61 7.05109 61 7.25C61 7.44891 60.921 7.63968 60.7803 7.78033C60.6397 7.92098 60.4489 8 60.25 8H49.75C49.5511 8 49.3603 7.92098 49.2197 7.78033C49.079 7.63968 49 7.44891 49 7.25ZM46 2.75C46 2.55109 46.079 2.36032 46.2197 2.21967C46.3603 2.07902 46.5511 2 46.75 2H63.25C63.4489 2 63.6397 2.07902 63.7803 2.21967C63.921 2.36032 64 2.55109 64 2.75C64 2.94891 63.921 3.13968 63.7803 3.28033C63.6397 3.42098 63.4489 3.5 63.25 3.5H46.75C46.5511 3.5 46.3603 3.42098 46.2197 3.28033C46.079 3.13968 46 2.94891 46 2.75Z"
          fill="#656161"
        />
      </svg>
    </div>
  );
};

const FilterTop = () => {
  const [openSex, setOpenSex] = React.useState(true);

  const handleSexClick = () => {
    setOpenSex(!openSex);
  };

  const [openSize, setOpenSize] = React.useState(true);

  const handleSizeClick = () => {
    setOpenSize(!openSize);
  };

  const [openColor, setOpenColor] = React.useState(true);

  const handleColorClick = () => {
    setOpenColor(!openColor);
  };
  return (
    <div className="filterBarLinks filterTop">
      <div className=" filterBorderBl filterHead px-1 ">
        <div className=" col-7 ">Filter</div>{" "}
        <div className="col-2 cursor-pointer">Clear</div>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleSexClick}
        >
          <div className="fw-600 ps-2">Sex</div>
          {openSex ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openSex} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>Male</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Female</span>
            </Link>
          </div>
        </Collapse>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleSizeClick}
        >
          <div className="fw-600 ps-2">Size</div>
          {openSize ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openSize} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>S</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>M</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>L</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>XL</span>
            </Link>
          </div>
        </Collapse>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleColorClick}
        >
          <div className="fw-600 ps-2">Color</div>
          {openColor ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openColor} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>Blue</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Red</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Yellow</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Black</span>
            </Link>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

const FilterBottom = () => {
  return (
    <span>
      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 w-70 px-2">New</div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 px-2">
          Women Active Wear
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 w-90 mb-3 px-2">
          Men Active Wear
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 w-80 mb-3 px-2">
          Waist Trainer
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 px-2">
          Fitness Equipment
        </div>
      </div>
    </span>
  );
};

const Category = (props) => {
  const classes = useStyles();
  const categoryTitle = props.categoryTitle;
  const { body } = props.items;

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <h3 className="catalogCategory px-4 mb-4">{categoryTitle}</h3>
      </Hidden>
      <div className={"shopRow mx-0 px-4 "}>
        {body.map((item) => (
          <Link
            to={{ state: item, pathname: "/shop/details" }}
            className="shop-col "
          >
            <div className="shopItemImg">
              <img
                className=" w-100 h-100"
                src={item.displayImage.url}
                alt=""
              />
            </div>
            <div className="shop-col-text">
              <p className="fw-700">{item.title}</p>
              <p># {item.price} / $ 17</p>
              <p className="fs-sm mb-m8">Available in 3 colors</p>
              <svg
                width="60"
                height="13"
                viewBox="0 0 64 16"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#CA3030" />
                <circle cx="32" cy="8" r="8" fill="#B9F43B" />
                <circle cx="56" cy="8" r="8" fill="#B73333" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
