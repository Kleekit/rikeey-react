import { Grid } from "@mui/material";
import React from "react";
import CardNFloatedText from "./cardNFloatedText";

const Ekama = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <CardNFloatedText imageUrl="/images/men-button.png" text="Woman" />
        </Grid>
        <Grid item lg={6}>
          <CardNFloatedText imageUrl="/images/men-button.png" text="Man" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ekama;
