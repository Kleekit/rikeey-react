import React from "react";
import Carousel from "react-grid-carousel";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "0 auto",
    "@media (max-width: 600px)": {
      width: "90%",
    },
    "& .sc-ifAKCX  > .sc-bdVaJa": {
      position: "absolute",
      top: "-6vh",
      right: "15%",
      "& span": {
        background: "#d1b9b9",
      },
      "@media (max-width: 600px)": {
        // display: "block",
        // top: "50%",
        right: "-4% !important",
      },
    },
    "& .sc-ifAKCX  > .sc-bdVaJa:first-of-type": {
      left: "70%",
      "@media (max-width: 767px)": {
        left: "60% !important",
      },
      "@media (max-width: 600px)": {
        left: "-4% !important",
      },
    },
    "& .carouselImg": {
      height: "70vh",
      "@media (max-width: 767px)": {
        height: "50vh",
      },
      "@media (max-width: 480px)": {
        height: "42vh",
      },
    },
  },
});

const carouselImg = [
  { src: "https://picsum.photos/800/600?random=1", alt: "" },
  { src: "https://picsum.photos/800/600?random=2", alt: "" },
  { src: "https://picsum.photos/800/600?random=3", alt: "" },
  { src: "https://picsum.photos/800/600?random=4", alt: "" },
  { src: "https://picsum.photos/800/600?random=5", alt: "" },
  { src: "https://picsum.photos/800/600?random=6", alt: "" },
  { src: "https://picsum.photos/800/600?random=7", alt: "" },
  { src: "https://picsum.photos/800/600?random=8", alt: "" },
  { src: "https://picsum.photos/800/600?random=9", alt: "" },
];

export default function CustomCarousel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel
        cols={3}
        rows={1}
        gap={40}
        mobileBreakpoint={600}
        loop={true}
        autoplay={3000}
        scrollSnap={true}
        hideArrow={false}
      >
        {carouselImg.map((item) => (
          <Carousel.Item>
            <img
              key={`${item.src}_0`}
              alt={item.alt}
              className={"carouselImg"}
              width="100%"
              src={item.src}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
