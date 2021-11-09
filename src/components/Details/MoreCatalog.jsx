import React from "react";
import { Grid } from "@mui/material";
import ShopItem from "../Shop/ShopItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "10rem",
    "& .containerCatalogItem": {
      flexGrow: 0,
      maxWidth: "22%",
      flexBasis: "22%",
      "@media (max-width: 860px)": {
        maxWidth: "46%",
        flexBasis: "46%",
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

export default function MoreCatalog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid items xs={12} md={2} className="containerCatalogItem">
          <ShopItem
            className={"catalogItem"}
            link={"/shop/details"}
            // imgSrc={item.displayImage.url}
            title={"title"}
            price={"price"}
          />
        </Grid>
        <Grid items xs={12} md={2} className="containerCatalogItem">
          <ShopItem
            className={"catalogItem"}
            link={"/shop/details"}
            // imgSrc={item.displayImage.url}
            title={"title"}
            price={"price"}
          />
        </Grid>
        <Grid items xs={12} md={2} className="containerCatalogItem">
          <ShopItem
            className={"catalogItem"}
            link={"/shop/details"}
            // imgSrc={item.displayImage.url}
            title={"title"}
            price={"price"}
          />
        </Grid>
        <Grid items xs={12} md={2} className="containerCatalogItem">
          <ShopItem
            className={"catalogItem"}
            link={"/shop/details"}
            // imgSrc={item.displayImage.url}
            title={"title"}
            price={"price"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
