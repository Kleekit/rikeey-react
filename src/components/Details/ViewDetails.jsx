import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CustomerReviews from "../Reuseable/CustomerReviews";

const useStyles = makeStyles({
  root: {
    marginBottom: "10rem",
    "& .customerReview": {
      marginTop: "3rem",
      padding: "3rem 4.5rem",
      borderRadius: "1rem",
      background: "rgba(251, 251, 251, 1)",
      border: "0.1rem solid rgba( 220, 220, 220, .5)",
      "@media (max-width: 600px)": {
        padding: "1.5rem 2.5rem",
      },
      "& .customer": {
        marginBottom: "5rem",
        "& .customerImg": {
          width: "8rem",
          height: "8rem",
          clipPath: "circle() !important",
          background: "grey",
          marginRight: "3rem",
        },
      },
    },
  },
  "& .reviewContainer": {
    width: "90%",
    margin: "auto",
    "@media (max-width: 860px)": {
      width: "100%",
    },
  },
  "& .customerReview": {
    flexGrow: 0,
    maxWidth: "45%",
    flexBasis: "45%",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      marginBottom: "5rem",
    },
  },
});

export default function ViewDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        className="reviewContainer"
      >
        <CustomerReviews />
        <CustomerReviews />
      </Grid>
    </div>
  );
}
