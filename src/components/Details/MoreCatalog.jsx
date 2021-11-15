import React from "react";
// import { Grid } from "@mui/material";
import ShopItem from "../Shop/ShopItem";
import { makeStyles } from "@material-ui/styles";
import { getProduct } from "../../methods/product.method";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  root: {
    marginBottom: "10rem",
    "& .containerCatalogItem": {
      flex: "0 0 auto",
      width: "25%",
      padding: "0 2%",
      "@media (max-width: 860px)": {
        width: "25%",
        marginBottom: "5rem",
      },
    },
    "& .catalogItem": {
      "& .shopItemImg": {
        marginBottom: "3rem",
        height: "45vh",
        border: "0.1rem solid #000",
        "@media (max-width: 860px)": {
          height: "55vh",
        },
        "@media (max-width: 600px)": {
          height: "35vh",
        },
        "@media (max-width: 480px)": {
          height: "27vh",
        },
      },
    },
  },
});

export default function MoreCatalog(productId, subCat) {
  const classes = useStyles();

  const { isLoading, isError, data } = useQuery("getProduct", getProduct);

  if (isError) {
    return "bros error de";
  }
  if (isLoading) {
    return "Loading.......";
  }

  let item;
  if (data && data.status) {
    item = data.body;
  }

  const filteredProduct = item.filter(
    (data) => (data.subCategory = subCat && data._id !== productId)
  );

  return (
    <div className={classes.root}>
      <div className="row ">
        {filteredProduct.map((item) => (
          <div className="containerCatalogItem" key={item._id}>
            <ShopItem
              className={"catalogItem"}
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
