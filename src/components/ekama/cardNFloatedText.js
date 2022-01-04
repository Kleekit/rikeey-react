import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import CustomButton from "./customButton";
import "./ekama.css"; // check css file for additional css rules

const CardNFloatedText = ({ imageUrl, text, actionFN }) => {
  return (
    <div className="position-relative cardNFloatedText">
      <Card>
        <CardMedia
          //   height="100vh"
          component="img"
          image={imageUrl}
          //   alt="Paella dish"
        />
      </Card>
      <div className="position-absolute action ">
        <div>
          <h2>{text}</h2>
        </div>
        <div>
          <CustomButton text="shop" />
        </div>
      </div>
    </div>
  );
};

export default CardNFloatedText;
