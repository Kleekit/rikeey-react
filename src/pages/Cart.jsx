import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Divider, Hidden } from "@mui/material";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .cart-head": {
      padding: "2rem",
    },
    "& .cart-bb": {
      height: "40vh",
    },
    "& .itemImg": {
      ["@media (max-width: 960px )"]: {
        width: "100%",
      },
    },
    "& .cartAddBtn": {
      padding: ".5rem 1.5rem",
      borderRadius: "1rem",
      background: "rgba(196, 196, 204, 0.3)",
      fontSize: "1.5rem",
    },
    "& .red": {
      color: "rgba(115, 15, 17, 1)",
      cursor: "pointer",
    },
    "& .itemAmount": {
      padding: "0 2.5rem",
      ["@media (max-width: 960px )"]: {
        padding: "0 1rem",
      },
    },
    "& .decreaseBtn, .increaseBtn": {
      fontSize: "1.8rem",
      cursor: "pointer",
      fontWeight: 700,
    },
    "& .bDivider": {
      height: "0.17rem",
    },
    "& .total-sec": {
      width: "15%",
      ["@media (max-width: 960px )"]: {
        width: "50%",
      },
    },
    "& .submitBtn": {
      marginTop: "5rem",
      background: "rgba(115, 15, 17, 1)",
      color: "#fff !important",
    },
    "& .smCartTitle": {
      marginBottom: "2rem",
    },
    "& .smCartTotal": {
      width: "60%",
      display: "flex",
      flexWrap: "wrap",
      ["@media (max-width: 960px )"]: {
        padding: "2rem",
      },
    },
    "& .smCartQuantity": {
      width: "40%",
      flexGrow: 0,
      display: "flex",
      ["@media (max-width: 960px)"]: {
        maxWidth: "100%",
        flexBasis: "100%",
        border: "none",
        display: "block",
        textAlign: "center",
        marginBottom: "3rem",
      },
    },
    "& .smCartColumn": {
      width: "30%",
      flexGrow: 0,
      display: "flex",
      ["@media (max-width: 960px)"]: {
        maxWidth: "50%",
        flexBasis: "50%",
        border: "none",
        display: "block",
        textAlign: "center",
      },
    },
  },
});

function Cart() {
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row`,
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="cart mx-auto">
        <div className="cart-head  ">
          <div className="w-40 my-auto ps-4">Items</div>
          <Hidden smDown>
            <div className="w-20 my-auto text-center">Quantity</div>
            <div className="w-20 my-auto text-center">Prices</div>
            <div className="w-20 my-auto text-center">Subtotal</div>
          </Hidden>
        </div>
        <div className="cart-body ">
          <div className="cartRow">
            <div className="row smCartRow cart-bb">
              <div className="w-40 cart-br d-flex">
                <div className="row mx-0 px-4">
                  <div className="col-md-6 h-75 text-center p-0 my-auto">
                    <img
                      className="itemImg w-70 h-100"
                      src="./images/women-set.png"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 p-0 my-auto text-center ">
                    Contour Seamless Leggings
                  </div>
                </div>
              </div>
              <div className="smCartTotal">
                <div className="smCartQuantity cart-br">
                  <Hidden smUp>
                    <div className="smCartTitle">Quantity</div>
                  </Hidden>
                  <div className="text-center m-auto">
                    <span className="fw-600 cartAddBtn">
                      <span className="decreaseBtn">-</span>
                      <span className="itemAmount ">2</span>
                      <span className="increaseBtn">+</span>
                    </span>
                    <div className="fs-sm mt-3 text-center fw-600 red">
                      Remove
                    </div>
                  </div>
                </div>
                <div className="smCartColumn cart-br">
                  <Hidden smUp>
                    <div className="smCartTitle">Total</div>
                  </Hidden>
                  <div className="m-auto">$ 45.55</div>
                </div>
                <div className="smCartColumn">
                  <Hidden smUp>
                    <div className="smCartTitle">Sub Total</div>
                  </Hidden>
                  <div className="m-auto">$ 45.55</div>
                </div>
              </div>
            </div>
            <Divider className="bDivider" />
          </div>
        </div>
        <div className="total-sec  mt-5 ms-auto">
          <div className="cart-total mb-5 d-flex ps-5 pe-2 pb-2 justify-content-between">
            <div>Total</div>
            <div>$ 232.2</div>
          </div>
          <Link to="/shop">
            <div className="d-flex  justify-content-end pe-4 fs-lgr red">
              Continue shopping
            </div>
          </Link>
          <Link
            to="/checkout"
            className="d-flex ms-auto py-3 justify-content-center me-3 w-80 br-2 submitBtn"
          >
            Checkout
          </Link>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Cart;
