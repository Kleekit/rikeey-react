import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";

function Payment() {
  const customConfig = {
    customStyle: "pt-4 px-4 row ",
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto">
        <div className="contact-info mb-5  br-3 px-3 py-4">
          <h5 className="fw-600 px-2 mb-4">Contact Information</h5>
          <div className="form px-4">
            <div className="form-group fs-sm">
              <label for="">Email address</label>
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
            <div className="form-group fs-sm ">
              <label for="">Phone Number</label>
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

        <div className="waybill-info br-3 px-3 py-4 mb-4">
          <h5 className="fw-600 px-2 mb-4">Waybill Information</h5>
          <div className="form px-4">
            <div className="form-group fs-sm">
              <label for="">Address</label>
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

        <div className="payment-info br-3 px-3 pt-4 pb-5 mb-4">
          <h5 className="fw-600 px-2 mb-4">Payment Method</h5>
          <div className="form px-4 ">
            <div className="form-check d-flex mb-1">
              <div className="w-80">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Card"
                  checked
                />
                <label className="form-check-label ms-3 fs-sm" for="">
                  Card
                </label>
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
                <label className="form-check-label ms-3 fs-sm" for="">
                  Paystack
                </label>
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

        <div className="d-flex justify-content-between">
          <a href="../cart/checkout" className="my-auto">
            <div className="ms-3 ">
              <svg
                className="me-2"
                width="8"
                height="9.5"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return to Personal Information
            </div>
          </a>
          <div
            type="submit"
            className=" me-3 br-2 px-3 py-2 fw-600 bg-red justify-content-end white"
          >
            Make Payment
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Payment;
