import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Hidden } from "@mui/material";
import ShopItem from "./ShopItem";

// import { getProduct } from "../../methods/product.method";
// import { getOrStoreId } from "../../helpers/getOrStore.helper";

const useStyles = makeStyles({
  root: {
    margin: "0 2rem",
    "& .shopRow": {
      flexWrap: "wrap",
      display: "flex",
    },
    "& .shop-col": {
      flex: "0 0 auto",
      width: "33.33333%",
      padding: "0 2%",
      "@media (max-width: 600px)": {
        width: "50%",
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

export default function Category({ items, displayCategory }) {
  const classes = useStyles();

  // const categoryTitle = props.categoryTitle;
  // const { body } = props.items;
  // console.log(items);

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <h3 className="catalogCategory px-4 mb-4">{displayCategory}</h3>
      </Hidden>

      <div className={"shopRow row"}>
        {items.map((item, itemIdx) => (
          <div className="shop-col" key={itemIdx + Number(item.price)}>
            <ShopItem
              className="shopItemImg"
              link={`/details/${item._id}`}
              imgSrc={item.displayImage.url}
              name={item.name}
              price={item.price}
              colors={
                item.colors.length > 0 ? (
                  <p className="fs-sm mb-m8">
                    Available in {item.colors} colors
                  </p>
                ) : null
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
