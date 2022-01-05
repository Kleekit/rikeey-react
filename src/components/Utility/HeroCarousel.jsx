import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Pagination,
} from "swiper";
import { makeStyles } from "@material-ui/styles";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import clsx from "clsx";

SwiperCore.use([Autoplay, EffectCoverflow, Keyboard, Pagination]);

const useStyles = makeStyles({
  root: {
    width: "100% !important",
    "& .carouselImg": {
      height: "100vh",
      width: "100vw",
    },
  },
});

const carouselImg = [
  { src: "./images/slide1.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/slide3.png", alt: "" },
  { src: "./images/men-button.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/women-set.png", alt: "" },
  { src: "./images/slide1.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/slide3.png", alt: "" },
  { src: "./images/men-button.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/women-set.png", alt: "" },
];

export default function HeroCarousel(props) {
  const classes = useStyles();

  return (
    <Swiper
      className={clsx(classes.root, props.styles)}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination
      loop
      grabCursor
      keyboard={{ enabled: true }}
    >
      {carouselImg.map((item, itemIdx) => (
        <SwiperSlide key={itemIdx}>
          <img
            alt={item.alt}
            className={"carouselImg"}
            width="100%"
            src={item.src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
