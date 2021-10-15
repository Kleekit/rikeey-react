import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .red": {
      color: "rgba(115, 15, 17, 1)",
      cursor: "pointer",
    },
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
  },
});

function Payment() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto">
        <div className="contact-info mBottom  br-3 px-4 py-5">
          <h3 className="fw-600 px-2 ">Contact Information</h3>
          <div className="form px-4">
            <div className="form-group  fs-sm">
              <label className="mb-2">Email address</label>
              <div className="d-flex ">
                <input
                  type="email"
                  className="form-control w-80 no-border"
                  id=""
                  aria-describedby=""
                  placeholder="johndoe@gmail.com"
                />
                <div className="w-20 fs-smr red my-auto text-center fw-700">
                  Change
                </div>
              </div>
            </div>
            <div className="form-group mb-4 fs-sm ">
              <label className="mb-2">Phone Number</label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control w-80 no-border"
                  id=""
                  placeholder="+234 0345231265"
                />
                <div className="w-20 fs-smr red my-auto text-center fw-700">
                  Change
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="waybill-info mBottom br-3 px-4 py-5 ">
          <h3 className="fw-600 px-2 ">Waybill Information</h3>
          <div className="form px-4">
            <div className="form-group mb-4 fs-sm">
              <label className="mb-2">Address</label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control w-80 no-border"
                  id=""
                  placeholder="Jakpa"
                />
                <div className="w-20 fs-smr red my-auto text-center fw-700">
                  Change
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-info mBottom br-3 px-4 pt-5 pb-5 ">
          <h3 className="fw-600 px-2 ">Payment Method</h3>
          <div className="form px-4 ">
            <div className="form-check d-flex mb-3">
              <div className="w-80">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Card"
                  checked
                />
                <label className="form-check-label ms-3 fs-sm">Card</label>
              </div>
              <div className="w-20 ">
                <img
                  className="mastercard-img"
                  src="./images/mastercard.png"
                  alt=""
                />
              </div>
            </div>
            <div className="form-check d-flex">
              <div className="w-80">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Paystack"
                />
                <label className="form-check-label ms-3 fs-sm">Paystack</label>
              </div>
              <div className="w-20 ">
                <img
                  className="paystack-img"
                  src="./images/paystack.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Link to="/checkout">
            <div className="ms-3 d-flex align-items-center">
              <ArrowLeft
                sx={{
                  fontSize: "2rem",
                }}
              />
              <span>Return to Personal Information</span>
            </div>
          </Link>
          <div
            type="submit"
            className="submitBtn me-3 br-2 px-3 py-2 fw-600 justify-content-end white"
          >
            Make Payment
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Payment;
