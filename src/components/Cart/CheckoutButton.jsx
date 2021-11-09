import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getUser, register } from "../../methods/cart.method";
import { getOrStoreId } from "../../helpers/getOrStore.helper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .submitBtn": {
      marginTop: "5rem",
      background: "rgba(115, 15, 17, 1)",
      color: "#fff !important",
    },
  },
});

export default function CheckoutButton() {
  const classes = useStyles();

  const user = useQuery("verifyUser", getUser);

  const { isLoading, mutateAsync } = useMutation((payload) =>
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
    <div className={classes.root}>
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
    </div>
  );
}
