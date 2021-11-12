import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@mui/material";
import CustomContainer from "../components/Navigation/CustomContainer";
import MoreCatalog from "../components/Details/MoreCatalog";
// import ViewDetails from "../components/Details/ViewDetails";
import ProductDetails from "../components/Details/ProductDetails";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getProductDetails } from "../methods/product.method";

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
  const classes = useStyles();

  const customConfig = {
    customStyle: `${classes.root}`,
  };
  // query
  const productID = useParams();

  const { isLoading, isError, data } = useQuery(
    ["getProduct", { productId: productID.productId }],
    getProductDetails
  );

  if (isError) {
    return "bros error de.......";
  }

  if (isLoading) {
    return "Loading.......";
  }

  let item;
  if (data && data.status) {
    item = data.body;
  }

  console.log(data);

  return (
    <CustomContainer {...customConfig}>
      <ProductDetails
        item={item}
        displayImage={item.displayImage.url}
        displayAlt={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
        size={item.sizes}
        allImages={item.allImages}
      />
      <div className="more-catalog">
        <h2 className="header text-center">Something Light</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <MoreCatalog productId={item._id} subCat={item.subCategory} />
      </div>
      {/* <div className="reviews" id="viewReviews">
        <h2 className="header text-center">Reviews</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <ViewDetails />
      </div> */}
    </CustomContainer>
  );
}
