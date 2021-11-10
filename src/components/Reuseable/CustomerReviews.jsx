import React from "react";
import { Grid, Rating } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
    padding: "3rem 4.5rem",
    borderRadius: "1rem",
    background: "rgba(251, 251, 251, 1)",
    border: "0.1rem solid rgba( 220, 220, 220, .5)",
    //
    flexGrow: 0,
    maxWidth: "45% !important",
    flexBasis: "45% !important",
    "@media (max-width: 600px)": {
      padding: "1.5rem 2.5rem",
      //
      maxWidth: "100%",
      flexBasis: "100%",
      marginBottom: "5rem",
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
});

export default function CustomerReviews() {
  const classes = useStyles();

  const [value] = React.useState(2.5);

  return (
    <Grid item={true} xs={12} md={5} className={classes.root}>
      <div className="customer d-flex align-items-center">
        <div className="customerImg"></div>
        <div className="customerInfo">
          <div className="customerName mb-4 fw-600">Adrian</div>
          <Rating
            name="customers-rating"
            value={value}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
      <div className="reviewInfo">
        <div className="reviewTitle fw-700 mb-4">
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="reviewComment">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          impedit perspiciatis ipsum! Perspiciatis modi ipsa minus fuga
          voluptatum ea cumque nemo exercitationem, explicabo, molestiae, autem
          quas earum dolor laborum quidem facilis. Corrupti tempora explicabo
          ullam, expedita cupiditate obcaecati. Amet quae asperiores dolorem
          earum illum culpa molestias adipisci ipsum nobis voluptate ex magni
          repellat atque sed sit ad, dolorum unde doloribus, perspiciatis nisi
          temporibus quod exercitationem corrupti ab. Facilis fugiat nihil
          explicabo
        </div>
        <div className="customerName mt-4 fw-600">Adrian</div>
      </div>
    </Grid>
  );
}
