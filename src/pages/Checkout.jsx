import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Checkbox, FormControlLabel } from "@mui/material";

const useStyles = makeStyles({
  root: {
    marginTop: "10rem",
  },
});

function Checkout() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-4 row `,
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto">
        <div className="contact-info mb-5  br-3 px-3 py-4">
          <h3 className="fw-600 px-2 mb-4">Contact Information</h3>
          <div className="form px-4">
            <div className="form-group mb-4 fs-sm">
              <label for="">Email address</label>
              <input
                type="email"
                className="form-control w-80 no-border"
                id=""
                aria-describedby=""
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="form-group mb-4 fs-sm">
              <label for="">Phone Number</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="+234 0345231265"
              />
            </div>
          </div>
        </div>
        <div className="contact-info br-3 px-3 py-4 mb-4">
          <h3 className="fw-600 px-2 mb-4">Waybill Information</h3>
          <div className="form px-4">
            <div className="form-group mb-4 fs-sm">
              <label for="">First Name</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                aria-describedby=""
                placeholder="john"
              />
            </div>
            <div className="form-group mb-4 mb-4 fs-sm">
              <label for="">Last Name</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="doe"
              />
            </div>
            <div className="form-group mb-4 fs-sm">
              <label for="">Address</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="Jakpa"
              />
            </div>
            <div className="country-state-form w-80 d-flex justify-content-between">
              <div className="form-group mb-4 w-40 fs-sm">
                <label for="">Country</label>
                <input
                  type="text"
                  className="form-control  no-border"
                  id=""
                  placeholder="Nigeria"
                />
              </div>
              <div className="form-group mb-4 w-40 fs-sm">
                <label for="">State</label>
                <input
                  type="text"
                  className="form-control  no-border"
                  id=""
                  placeholder="Delta"
                />
              </div>
            </div>
            <div className="form-group mb-4 fs-sm">
              <label for="">City</label>
              <input
                type="text"
                className="form-control w-80 no-border"
                id=""
                placeholder="Warri"
              />
            </div>
            <div className="form-group mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input bg-grey"
                id=""
              />
              <label className="form-check-label fs-sm" for="">
                Save my details
              </label>
            </div>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "rgba(115, 15, 17, 1)",
                },
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a href="/cart" className="my-auto">
            <div className="ms-3">
              <svg
                className="me-2"
                width="8"
                height="9.5"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="align-self-center">Return to cart </span>
            </div>
          </a>
          <a href="/checkout/payment">
            <div
              type="submit"
              className=" me-3 br-2 px-3 py-2 fw-600 bg-red justify-content-end white"
            >
              Continue
            </div>
          </a>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Checkout;
