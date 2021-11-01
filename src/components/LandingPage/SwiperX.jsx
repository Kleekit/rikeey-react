import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import { makeStyles } from "@material-ui/styles";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

const useStyles = makeStyles({
  root: {
    width: "85%",
    margin: "0 auto",
    "@media (max-width: 600px)": {
      width: "90%",
    },
    // "& .swiper-button-prev, .swiper-button-next": {
    //   position: "relative",
    // },
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
  { src: "./images/slide1.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/slide3.png", alt: "" },
  { src: "./images/slide1.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/slide3.png", alt: "" },
  { src: "./images/slide1.png", alt: "" },
  { src: "./images/slide2.png", alt: "" },
  { src: "./images/slide3.png", alt: "" },
];

function SwiperX() {
  const classes = useStyles();
  return (
    <Swiper
      className={classes.root}
      modules={[Keyboard, Navigation]}
      grabCursor
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      spaceBetween={60}
      slidesPerView={3}
      navigation
      loop
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {carouselImg.map((item) => (
        <SwiperSlide>
          <img
            key={`${item.src}_0`}
            alt={item.alt}
            className={"carouselImg"}
            width="100%"
            src={item.src}
          />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}

export default SwiperX;
