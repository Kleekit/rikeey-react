import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useMutation } from "react-query";
import { makeStyles } from "@material-ui/styles";
import { removeItemFormCart } from "../../methods/cart.method";

const useStyles = makeStyles({
  root: {
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
    "& .itemImg": {
      "@media (max-width: 600px )": {
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
    "& .mdUp": {
      "@media (min-width: 960px)": {
        display: "none",
      },
    },
  },
});

export default function CartItem({ item, refetch, setTotal, total, calTotal }) {
  const classes = useStyles();
  const { mutateAsync, isLoading } = useMutation((item) =>
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
    <div className={classes.root}>
      <div className="row smCartRow cart-bb">
        <div className="w-40 cart-br p-3 d-flex">
          <div className="row w-100 mx-0 px-4">
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
}
