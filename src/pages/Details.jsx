import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@mui/material";
import CustomContainer from "../components/Navigation/CustomContainer";
import MoreCatalog from "../components/Details/MoreCatalog";
import ViewDetails from "../components/Details/ViewDetails";
import ProductDetails from "../components/Details/ProductDetails";

const useStyles = makeStyles({
  root: {
    padding: "5rem 4rem",
    "& .dividerHeader": {
      width: "25%",
      "@media (max-width: 960px)": {
        width: "60%",
      },
    },
  },
});

export default function Details(props) {
  const item = props.location.state;
  const classes = useStyles();

  const customConfig = {
    customStyle: `${classes.root}`,
  };

  return (
    <CustomContainer {...customConfig}>
      <ProductDetails
        displayImage={item.displayImage.url}
        alt={item.name}
        title={item.title}
        price={item.price}
        description={item.description}
      />
      <div className="more-catalog">
        <h2 className="header text-center">Something Light</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <MoreCatalog />
      </div>
      <div className="reviews" id="viewReviews">
        <h2 className="header text-center">Reviews</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <ViewDetails />
      </div>
    </CustomContainer>
  );
}
