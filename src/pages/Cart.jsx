import React, { useEffect, useState } from "react";
import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import {
  getCartItem,
  getUser,
  register,
  removeItemFormCart,
} from "../methods/cart.method";
import { getOrStoreId } from "../helpers/getOrStore.helper";
// import {removeItemFormCart} from '../methods/cart.method'

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .cart-head": {
      padding: "2rem",
    },
    "& .cart-bb": {
      height: "40vh",
      "@media (max-width: 600px )": {
        height: "fit-content",
      },
    },
    "& .itemImgContainer": {
      "@media (max-width: 420px )": {
        display: "none",
      },
    },
    // "& .itemImg": {
    //   "@media (max-width: 600px )": {
    //     width: "100%",
    //   },
    // },
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
      "@media (max-width: 960px )": {
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
      "@media (max-width: 960px )": {
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
      "@media (max-width: 960px )": {
        padding: "2rem",
      },
    },
    "& .smCartQuantity": {
      width: "40%",
      flexGrow: 0,
      display: "flex",
      "@media (max-width: 960px)": {
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
      "@media (max-width: 960px)": {
        maxWidth: "50%",
        flexBasis: "50%",
        border: "none",
        display: "block",
        textAlign: "center",
      },
    },
    "& .mdDown": {
      "@media (max-width: 960px)": {
        display: "none",
      },
    },
    "& .mdUp": {
      "@media (min-width: 960px)": {
        display: "none",
      },
    },
  },
});

function Cart() {
  const [total, setTotal] = useState(0);
  const { isLoading, data, isError, refetch } = useQuery(
    "getCartItem",
    getCartItem
  );
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row`,
  };

  if (isError) {
    return <h3>Error....</h3>;
  }
  console.log(data);
  // if (isLoading) {
  //   return ;
  // }

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
                key={item.name}
                setTotal={setTotal}
                total={total}
                calTotal={calTotal}
              />
            ))}
        </div>
        <div className="total-sec  mt-5 ms-auto">
          <div className="cart-total mb-5 d-flex ps-5 pe-2 pb-2 justify-content-between">
            <div>Total</div>
            <div>$ {total}</div>
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

const CheckoutButton = () => {
  const [detail, setDetail] = useState(false);
  const user = useQuery("verifyUser", getUser);

  const { isError, isLoading, data, mutateAsync } = useMutation((payload) =>
    register(payload)
  );

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
    <>
      {!isLoading ? (
        <>
          {user.data && user.data.status ? (
            <Button
              onClick={checkoutUser}
              className="d-flex ms-auto py-3 justify-content-center me-3 w-80 br-2 submitBtn"
            >
              Checkout
            </Button>
          ) : (
            <Link
              to="/checkout"
              className="d-flex ms-auto py-3 justify-content-center me-3 w-80 br-2 submitBtn"
            >
              time to checkout
            </Link>
          )}
        </>
      ) : (
        <h1>Loading......</h1>
      )}
    </>
  );
};
const CartItem = ({ item, refetch, setTotal, total, calTotal }) => {
  const { mutateAsync, isSuccess, isLoading } = useMutation((item) =>
    removeItemFormCart(item)
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (total > 0) {
      const oldSubTotal = quantity * item.price;
      const deductedTotal = total - oldSubTotal;
      const newQuantity = quantity + 1;
      const newSubTotal = newQuantity * item.price;
      const newTotal = deductedTotal + newSubTotal;
      setQuantity(quantity + 1);
      setTotal(newTotal);
    } else {
      const oldSubTotal = quantity * item.price;
      const deductedTotal = calTotal() - oldSubTotal;
      const newQuantity = quantity + 1;
      const newSubTotal = newQuantity * item.price;
      const newTotal = deductedTotal + newSubTotal;
      setQuantity(quantity + 1);
      setTotal(newTotal);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newTotal = total - item.price;
      setQuantity(quantity - 1);
      setTotal(newTotal);
    }
    // calTotal();
  };
  const handleRemoveItem = async () => {
    const payload = {
      _id: item._id,
    };
    const res = await mutateAsync(payload);
    if (res.status) {
      refetch();
    }
  };
  return (
    <div className="cartRow">
      <div className="row smCartRow cart-bb">
        <div className="w-40 cart-br p-3 d-flex">
          <div className="row mx-0 px-4">
            <div className="col-md-6 h-75 itemImgContainer text-center p-0 my-auto">
              <img className="itemImg w-80 h-100" src={item.productId} alt="" />
            </div>
            <div className="col-md-6 p-0 my-auto text-center ">
              {item.productName}
            </div>
          </div>
        </div>
        <div className="smCartTotal">
          <div className="smCartQuantity cart-br">
            <div className="smCartTitle mdUp">Quantity</div>
            <div className="text-center m-auto">
              <span className="fw-600 cartAddBtn">
                <span onClick={decreaseQuantity} className="decreaseBtn">
                  -
                </span>
                <span className="itemAmount ">{quantity}</span>
                <span onClick={increaseQuantity} className="increaseBtn">
                  +
                </span>
              </span>
              {!isLoading ? (
                <div
                  onClick={handleRemoveItem}
                  className="fs-sm mt-3 text-center fw-600 red"
                >
                  Remove
                </div>
              ) : (
                <h1>load spinner</h1>
              )}
            </div>
          </div>
          <div className="smCartColumn cart-br">
            <div className="smCartTitle mdUp">Total</div>
            <div className="m-auto">$ {item.price}</div>
          </div>
          <div className="smCartColumn">
            <div className="smCartTitle mdUp">Sub Total</div>
            <div className="m-auto">$ {item.price * quantity}</div>
          </div>
        </div>
      </div>
      <Divider className="bDivider" />
    </div>
  );
};

export default Cart;
