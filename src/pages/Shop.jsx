import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Grid, Hidden, Pagination } from "@mui/material";
import ShopSideBar from "../components/Shop/ShopSidebar";
import OpenFIlter from "../components/Shop/OpenFIlter";
import FilterTop from "../components/Shop/FilterTop";
import FilterBottom from "../components/Shop/FilterBottom";
import Category from "../components/Shop/Category";
import { useQuery } from "react-query";
import { getCategory, getProduct } from "../methods/product.method";
import { useParams } from "react-router";
// import { getOrStoreId } from "../helpers/getOrStore.helper";
// import { Link } from "react-router-dom";

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
  const classes = useStyles();
  const shopParams = useParams();

  console.log({ shopParams });
  const customConfig = {
    customStyle: `${classes.root} pt-4 d-flex`,
  };

  const { filterData } = useQuery("getCategory", getCategory);

  const { isLoading, isError, data } = useQuery("getProduct", getProduct);
  // const items = data;
  //
  // console.log(data.body[2].subCategory);

  if (isError) {
    <h1>Something Went Wrong</h1>;
  }
  let allProducts = [];
  let displayCategory;
  if (data && data.status) {
    if (shopParams.subCategory) {
      for (let singleProduct of data.body) {
        if (singleProduct.subCategory === shopParams.subCategory) {
          allProducts.push(singleProduct);
          displayCategory = singleProduct.subCategory;
        }
      }
    } else if (shopParams.category) {
      for (let singleProduct of data.body) {
        if (singleProduct.productCategory === shopParams.category) {
          allProducts.push(singleProduct);
          displayCategory = singleProduct.productCategory;
        }
      }
    } else {
      allProducts = data.body;
      displayCategory = "All Products";
    }
  }
  // console.log(allProducts);

  return (
    <CustomContainer {...customConfig}>
      {isError ? (
        <></>
      ) : isLoading ? (
        <h3>loading....</h3>
      ) : data && data.status ? (
        <Grid container justifyContent="space-between">
          <ShopSideBar openFilter={<OpenFIlter />}>
            <div className={classes.root}>
              <FilterTop />
            </div>
          </ShopSideBar>
          <Hidden mdDown>
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={3}
              className="filter-col pe-0"
            >
              <div className="filter-content fs-large pb-5 fw-500 ">
                {/* <FilterTop /> */}
                <FilterBottom />
              </div>
            </Grid>
          </Hidden>
          <Grid item={true} xs={12} sm={12} md={9} className="shop-catalog ">
            <Category items={allProducts} displayCategory={displayCategory} />
            <div className="d-l-none pagination d-flex justify-content-center">
              <Hidden mdUp>
                <Pagination count={10} variant="outlined" color="primary" />
              </Hidden>
            </div>
          </Grid>
        </Grid>
      ) : null}
    </CustomContainer>
  );
}

export default Shop;
