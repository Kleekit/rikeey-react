import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import RikeeyLogo from "../Reuseable/RikeeyLogo";
import { Grid } from "@mui/material";
import AcceptedCardsSvg from "../Footer/AcceptedCardsSvg";
import AtOfficialRikeey from "../Reuseable/AtOfficialRikeey";
import FacebookSvg from "../Reuseable/FacebookSvg";
import InstagramSvg from "../Reuseable/InstagramSvg";
import TwitterSvg from "../Reuseable/TwitterSvg";
import RightIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    padding: "5rem 2rem",
    fontSize: "1.8rem",
    "& .footerLogo": {
      width: "6rem",
    },
    "& .signup-align": {
      "@media (max-width: 600px)": {
        textAlign: "left",
      },
    },
    "& .signup-link": {
      "@media (max-width: 420px)": {
        marginTop: "3rem",
      },
    },
    "& .paymentMethodCon": {
      "@media (max-width: 767px)": {
        marginTop: "4rem",
      },
    },
    "& .menuIcon": {
      fontSize: "3.5rem",
      color: "#fff",
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item={true} xs={12} sm={11} md={11}>
          <Grid container justifyContent="space-between" className="mt-3">
            <div className="footerBox flex items-center justify-center xs:flex-col">
              <div className="oneFooter w-full">
                <Grid item={true} xs={5} sm={5} md={5}>
                  <Link className="footerLogo block" to="/">
                    <RikeeyLogo />
                  </Link>
                  <div className="mt-5">
                    <p className="mb-5 xs:text-[1.5rem]">
                      Rikeey is a Sport and Fashion brand that focuses on
                      fitness, fashion, and lifestyle.
                    </p>
                    <p className="xs:text-[1.5rem]">
                      Our brand is of high and top notch quality designed to
                      give you the needed comfort, confidence, motivation,
                      inspiration and style throughout your journey of a
                      fashionable and healthier lifestyle.
                    </p>
                  </div>
                </Grid>
              </div>

              <div className="twoFooter">
                <Grid item={true} xs={5} sm={5} md={5} className="flex">
                  <div className="">
                    <div className="email-text-align">
                      <p className="font-[600] signup-align mr-2 mb-3 xs:text-[1.6rem]">
                        Sign up to our newsletter
                      </p>
                      <div className="flex email-footer">
                        <input
                          className=""
                          type="text"
                          className="outline-none p-4 email-input-footer"
                          placeholder="Email"
                        />
                        <Link
                          to="/"
                          className="email-footer-label mr-2 flex items-center justify-center"
                        >
                          <RightIcon className="menuIcon" />
                        </Link>
                      </div>
                    </div>
                    <div className="signup-link flex">
                      <Link to="/">
                        <FacebookSvg />
                      </Link>
                      <Link to="/">
                        <InstagramSvg />
                      </Link>
                      <Link to="/">
                        <TwitterSvg />
                      </Link>
                      <AtOfficialRikeey />
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </Grid>

          <div className="paymentMethodCon flex mx-0 px-3 xs:items-center xs:justify-center">
            <div className="payment-method w-full">
              <p className="font-bold xs:mb-5">Accepted Payment Partners</p>
              <div className="payment-icon sm:w-[20rem] xs:ml-10">
                <AcceptedCardsSvg />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
