import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
} from "swiper";
import { makeStyles } from "@material-ui/styles";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, EffectCoverflow, Keyboard, Navigation]);

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "0 auto",
    "@media (max-width: 600px)": {
      width: "75%",
    },
    // "& .swiper-button-prev, .swiper-button-next": {
    //   position: "relative",
    // },
    "& .carouselImg": {
      height: "70vh",
      "@media (max-width: 767px)": {
        height: "60vh",
      },
      "@media (max-width: 480px)": {
        height: "42vh",
      },
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

function CarouselSwiper() {
  const classes = useStyles();
  return (
    <Swiper
      className={classes.root}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        600: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 12,
        stretch: 0,
        depth: 40,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      loop
      grabCursor
      keyboard={{ enabled: true }}
      // onSlideChange={(swiper) => {
      //   console.log("Slide index changed to: ", swiper.activeIndex);
      // }}
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

export default CarouselSwiper;
