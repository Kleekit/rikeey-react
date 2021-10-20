import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .submitBtn": {
      background: "rgba(115, 15, 17, 1)",
    },
    "& .mBottom": {
      marginBottom: "7rem",
    },
    "& h3": {
      marginBottom: "2.5rem",
    },
    "& .form-group": {
      marginBottom: "3rem",
    },
    "& .returnBtn": {
      fontSize: "1.7rem",
      "@media (max-width: 480px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

function Checkout() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto ">
        <div className="contact-info mBottom br-3 px-4 py-5">
          <h3 className="fw-600 px-2 ">Contact Information</h3>
          <div className="form px-4">
            <div className="form-group  fs-sm">
              <label className="mb-2">Email address</label>
              <input
                type="email"
                className="form-control w-80 no-border"
                id=""
                aria-describedby=""
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="form-group  fs-sm">
              <label className="mb-2">Phone Number</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="+234 0345231265"
              />
            </div>
          </div>
        </div>
        <div className="contact-info mBottom br-3 px-4 py-5">
          <h3 className="fw-600 px-2 ">Waybill Information</h3>
          <div className="form px-4">
            <div className="form-group  fs-sm">
              <label className="mb-2">First Name</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                aria-describedby=""
                placeholder="john"
              />
            </div>
            <div className="form-group   fs-sm">
              <label className="mb-2">Last Name</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="doe"
              />
            </div>
            <div className="form-group  fs-sm">
              <label className="mb-2">Address</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="Jakpa"
              />
            </div>
            <div className="country-state-form w-80 d-flex justify-content-between">
              <div className="form-group  w-40 fs-sm">
                <label className="mb-2">Country</label>
                <input
                  type="text"
                  className="form-control  no-border"
                  id=""
                  placeholder="Nigeria"
                />
              </div>
              <div className="form-group  w-40 fs-sm">
                <label className="mb-2">State</label>
                <input
                  type="text"
                  className="form-control  no-border"
                  id=""
                  placeholder="Delta"
                />
              </div>
            </div>
            <div className="form-group  fs-sm">
              <label className="mb-2">City</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="Warri"
              />
            </div>
            <div className="form-group form-check ">
              <input
                type="checkbox"
                className="form-check-input bg-grey"
                id=""
              />
              <label className="form-check-label fs-sm">Save my details</label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/cart">
            <div className="ms-3 returnBtn d-flex">
              <ArrowLeft
                sx={{
                  fontSize: "2.4rem",
                }}
              />
              <span>Return to cart </span>
            </div>
          </Link>
          <Link to="/checkout/payment">
            <div
              type="submit"
              className="submitBtn me-3 br-2 py-3 px-5 fw-600 justify-content-end white"
            >
              Continue
            </div>
          </Link>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Checkout;
