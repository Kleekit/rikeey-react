import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Hidden } from "@mui/material";
import ShopItem from "./ShopItem";
// import { FaCircle } from "react-icons/fa";
// import { useMutation, useQuery } from "react-query";
import { getProduct } from "../../methods/product.method";
import { getOrStoreId } from "../../helpers/getOrStore.helper";

const useStyles = makeStyles({
  root: {
    margin: "0 2rem",
    "& .shopRow": {
      flexWrap: "wrap",
      display: "flex",
    },
    "& .shop-col": {
      flexGrow: 0,
      maxWidth: "33.33333%",
      flexBasis: "33.33333%",
      padding: "0 2%",
      "@media (max-width: 600px)": {
        maxWidth: "50%",
        flexBasis: "50%",
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
  },
});

export default function Category(props) {
  const classes = useStyles();
  const categoryTitle = props.categoryTitle;
  const { body } = props.items;

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <h3 className="catalogCategory px-4 mb-4">{categoryTitle}</h3>
      </Hidden>
      <div className={"shopRow row"}>
        {body.map((item) => (
          <div className="shop-col">
            <ShopItem
              className="shopItemImg"
              link={{ state: item, pathname: "/shop/details" }}
              imgSrc={item.displayImage.url}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
