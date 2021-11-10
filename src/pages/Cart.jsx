import React, { useState } from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCartItem } from "../methods/cart.method";
import CartItem from "../components/Cart/CartItem";
import CheckoutButton from "../components/Cart/CheckoutButton";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .cart-head": {
      padding: "2rem",
    },
    "& .red": {
      color: "rgba(115, 15, 17, 1)",
      cursor: "pointer",
    },
    "& .total-sec": {
      width: "15%",
      "@media (max-width: 960px )": {
        width: "50%",
      },
    },
    "& .mdDown": {
      "@media (max-width: 960px)": {
        display: "none",
      },
    },
  },
});

export default function Cart() {
  const classes = useStyles();

  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row`,
  };

  const [total, setTotal] = useState(0);

  const { isLoading, data, isError, refetch } = useQuery(
    "getCartItem",
    getCartItem
  );

  if (isError) {
    return <h3>Error....</h3>;
  }
  let overallAllTotal = 0;

  if (data && data.status) {
    for (let item of data.body) {
      overallAllTotal += item.price * item.quantity;
    }
  }

  const calTotal = () => {
    const total = data.body.reduce((total, item) => item.price + total, 0);
    setTotal(total);
    return total;
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="cart mx-auto">
        <div className="cart-head  ">
          <div className="w-40 my-auto ps-4">Items</div>
          <div className="w-20 my-auto mdDown text-center">Quantity</div>
          <div className="w-20 my-auto mdDown text-center">Prices</div>
          <div className="w-20 my-auto mdDown text-center">Subtotal</div>
        </div>
        <div className="cart-body ">
          {isLoading && <h3>Loading...</h3>}
          {data &&
            data.status &&
            data.body.map((item) => (
              <CartItem
                item={item}
                refetch={refetch}
                key={item.productName}
                setTotal={setTotal}
                total={total}
                calTotal={calTotal}
              />
            ))}
        </div>
        <div className="total-sec  mt-5 ms-auto">
          <div className="cart-total mb-5 d-flex ps-5 pe-2 pb-2 justify-content-between">
            <div>Total</div>
            <div>$ {overallAllTotal}</div>
          </div>
          <Link to="/shop">
            <div className="d-flex  justify-content-end pe-4 fs-lgr red">
              Continue shopping
            </div>
          </Link>
          <CheckoutButton />
        </div>
      </div>
    </CustomContainer>
  );
}
