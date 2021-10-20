import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .hero-container": {
      "@media (max-width: 320px)": {
        marginBottom: "4rem",
      },
    },
    "& .comfort-text ": {
      fontSize: "5rem",
      "@media (max-width: 900px)": {
        fontSize: "4rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      },
    },
    "& .complete-text ": {
      fontSize: "3rem",
      "@media (max-width: 900px)": {
        fontSize: "2.2rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "1.8rem",
      },
    },
    "& .catalog-image-container": {
      width: "95%",
      margin: "0 auto",
    },
    "& .men-top, .men-bottom, .women-catalog": {
      height: "80vh",
      padding: 0,
      "@media (max-width: 600px)": {
        padding: "0 5rem",
        // height: "50vh",
      },
      "@media (max-width: 960px)": {
        marginBottom: "1.5rem",
      },
    },
    "& .men-top, .men-bottom": {
      "@media (max-width: 600px)": {
        height: "50vh",
      },
      "@media (max-width: 480px)": {
        height: "35vh",
      },
    },
    "& .women-short, .women-set": {
      height: "50%",
      "@media (max-width: 600px)": {
        marginBottom: "1.5rem",
        height: "50vh",
      },
      "@media (max-width: 480px)": {
        height: "35vh",
      },
    },
    "& .women-catalog": {
      "@media (max-width: 600px)": {
        height: "fit-content",
        marginBottom: "0rem !important",
      },
    },
    "& .catalog-label-text": {
      "@media (max-width: 330px)": {
        display: "none",
      },
    },
  },
});

function LandingPage() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root}`,
  };
  // const [imageIndex, setImageIndex] = useState(0);

  // const changeImage = () => {
  //   setInterval(() => {
  //     if (imageIndex > 5) {
  //       setImageIndex(0);
  //     } else {
  //       console.log(imageIndex);
  //       let newValue = imageIndex + 1;
  //       setImageIndex(newValue);
  //     }
  //   }, 1500);
  // };
  // useEffect(() => {
  //   changeImage();
  //   // return () => {
  //   //   cleanup;
  //   // };
  // }, []);

  return (
    <CustomContainer {...customConfig}>
      <div className="hero-container ">
        <img src="./images/madeforcomfort.png" className="hero-image" alt="" />
        <div className="hero-layer">
          <div className="hero-text">
            <h1 className="comfort-text ">Made for your comfort</h1>
            <h3 className="complete-text fw-600 mb-4">
              The complete sporty look
            </h3>
            <Link to="/shop">
              <div className="shop-text br-2 border-white btn bg-transparent white fw-700">
                <h2>Shop Now</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="catalog-section">
        <div className="catalog-label">
          <div className="catalog-label-text m-auto">
            Rikeey for Everyone...
          </div>
        </div>
        <Grid
          container
          justifyContent="center"
          className="catalog-image-container"
        >
          <Grid items xs={12} sm={4} md={4} className="men-top">
            <img
              alt=""
              src="./images/men-top.png"
              className="h-100 w-100 catalog-img img-fluid men-top-img"
            />
            <Link to="/shop">
              <div className="catalog-text-bg">Men Top</div>
            </Link>
          </Grid>
          <Grid items xs={12} sm={4} md={4} className="women-catalog">
            <div className="d-flex mx-0 women-short">
              <img
                alt=""
                src="./images/women-short.png"
                className="h-100 w-100 catalog-img img-fluid women-short-img"
              />
              <Link to="/shop">
                <div className="catalog-text-bg">Women Short</div>
              </Link>
            </div>
            <div className="d-flex mx-0 women-set">
              <img
                alt=""
                src="./images/women-set.png"
                className="h-100 w-100 catalog-img img-fluid women-set-img"
              />
              <Link to="/shop">
                <div className="catalog-text-bg">Women Set</div>
              </Link>
            </div>
          </Grid>
          <Grid items xs={12} sm={4} md={4} className="men-bottom">
            <img
              alt=""
              src="./images/men-button.png"
              className="h-100 w-100 catalog-img men-bottom-img"
            />
            <Link to="/shop">
              <div className="catalog-text-bg">
                <span>Men Bottom</span>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>

      <div className="slider-section position-relative">
        <div className="slider-label">
          <div className="slider-label-text m-auto ">Take a tour...</div>
        </div>

        <CustomCarousel carouselStyle="carouselStyle" />
      </div>
    </CustomContainer>
  );
}

export default LandingPage;
