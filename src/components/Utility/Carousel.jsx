import React from "react";
import { Swiper } from "swiper/react";
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

export default function Carousel(props) {
  const classes = useStyles();

  return (
    <Swiper
      className={clsx(classes.root, props.styles)}
      slidesPerView={1}
      // slidesPerView={"auto"}
      autoplay={{
        delay: props.delay,
        disableOnInteraction: false,
      }}
      pagination={{ dynamicBullets: true }}
      loop
      grabCursor
      keyboard={{ enabled: true }}
    >
      {props.children}
      {/* {carouselImg.map((item, itemIdx) => (
        <SwiperSlide key={itemIdx}>
           <img
            alt={item.alt}
            className={"carouselImg"}
            width="100%"
            src={item.src}
          /> 
          {props.children}
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}

Carousel.Slides = (props) => props.children;
