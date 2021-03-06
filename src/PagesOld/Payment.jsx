import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getUser, register } from "../methods/cart.method";
import { getOrStoreId } from "../helpers/getOrStore.helper";

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
    "& .customInput": {
      width: "80%",
    },
    "& .returnBtn": {
      fontSize: "1.7rem",
      "@media (max-width: 480px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

function Payment() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };

  const { isLoading, data } = useQuery("getUser", getUser);

  return (
    <CustomContainer {...customConfig}>
      {!isLoading ? (
        <div className="col-md-6 mt-6 mb-15 mx-auto">
          <div className="contact-info mBottom  br-3 px-4 py-5">
            <h3 className="fw-600 px-2 ">Contact Information</h3>
            <div className="form px-4">
              <div className="form-group  fs-sm">
                <label className="mb-2">Email address</label>
                <div className="d-flex ">
                  <input
                    type="email"
                    className="form-control customInput no-border"
                    id=""
                    aria-describedby=""
                    placeholder={data.body.email}
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
                    className="form-control customInput no-border"
                    id=""
                    placeholder={data.body.phone}
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
                    className="form-control customInput no-border"
                    id=""
                    placeholder={data.body.address}
                  />
                  <div className="w-20 fs-smr red my-auto text-center fw-700">
                    Change
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="payment-info mBottom br-3 px-4 pt-5 pb-5 ">
          <h3 className="fw-600 px-2 ">Payment Method</h3>
          <div className="form px-4 ">
            <div className="form-check d-flex mb-3">
              <div className="customInput">
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
              <div className="customInput">
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
        </div> */}

          <div className="d-flex justify-content-between align-items-center">
            <Link to="/checkout">
              <div className="ms-3 returnBtn d-flex">
                <ArrowLeft
                  sx={{
                    fontSize: "2.4rem",
                  }}
                />
                <span>Return to Personal Information</span>
              </div>
            </Link>
            <CheckoutButton />
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </CustomContainer>
  );
}

const CheckoutButton = () => {
  const { mutateAsync } = useMutation((payload) => register(payload));

  const checkoutUser = async () => {
    const sharedPreference = getOrStoreId();
    const user = await mutateAsync({ sharedPreference });
    // console.log({ user });
    if (user.status) {
      getOrStoreId(user.body.sharedPreference);
      window.location.href = user.body.pay;
    }
  };
  return (
    <div
      type="submit"
      onClick={checkoutUser}
      className="submitBtn me-3 br-2 px-4 py-3 fw-600 justify-content-end white"
    >
      Make Payment
    </div>
  );
};

export default Payment;
