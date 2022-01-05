import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import CustomButton from "../ekama/customButton";
import "../ekama/ekama.css"; // check css file for additional css rules

export default function CardNFloatedText({ imageUrl, text, actionFN }) {
  return (
    <div className="relative cardNFloatedText">
      <Card>
        <CardMedia
          //   height="100vh"
          component="img"
          image={imageUrl}
          //   alt="Paella dish"
        />
      </Card>
      <div className="absolute action ">
        <div>
          <h2>{text}</h2>
        </div>
        <div>
          <CustomButton text="shop" />
        </div>
      </div>
    </div>
  );
}
