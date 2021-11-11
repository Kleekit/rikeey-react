import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Paper, Divider, Grid, Rating } from "@mui/material";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import { useMutation } from "react-query";
import CommentDialog from "./CommentDialog";
import { addItemToCart } from "../../methods/cart.method";
import { getOrStoreId } from "../../helpers/getOrStore.helper";

const useStyles = makeStyles({
  root: {
    marginBottom: "10rem",
    "& .gridShopItem": {
      "& .shopItemContainer": {
        width: "70%",
        margin: "auto",
        "@media (max-width: 960px)": {
          width: "90%",
        },
        "@media (max-width: 600px) and (min-width: 420px)": {
          width: "70%",
        },
        "& .itemCoverImg": {
          height: "80vh",
          border: "0.1rem solid #000",
          marginBottom: "6rem",
          "@media (max-width: 960px)": {
            height: "65vh",
          },
          "@media (max-width: 480px)": {
            height: "50vh",
          },
        },
        "& .subCoverImg": {
          height: "30vh",
          border: "0.1rem solid #000",
          "@media (max-width: 960px)": {
            height: "40vh",
          },
          "@media (max-width: 600px)": {
            height: "30vh",
          },
          "@media (max-width: 600px) and (min-width: 480px)": {
            height: "40vh",
          },
        },
      },
    },
    "& .shopItemDetails": {
      "@media (max-width: 960px)": {
        marginTop: "4rem",
      },
      "& .viewReviewBtn": {
        color: "rgba(13, 109, 163, 1)",
        borderBottom: "0.1rem solid rgba(13, 109, 163, 1)",
        fontSize: "1.35rem",
      },
      "& .writeReviewBtn": {
        color: "rgba(115, 15, 17, 1)",
        borderBottom: "0.1rem solid rgba(115, 15, 17, 1)",
        fontSize: "1.35rem",
      },
      "& .itemDescription": {
        fontSize: "1.8rem",
        textAlign: "justify",
        lineHeight: "3.5rem",
        fontWeight: 600,
        width: "90%",
        "@media (max-width: 600px)": {
          width: "100%",
        },
      },
      "& .selectHeader": {
        marginBottom: "1.4rem",
      },
      "& .paperColorPicker": {
        padding: "1.2rem 2.8rem",
        paddingLeft: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
        width: "fit-content",
        marginBottom: "2.4rem",
      },
      "& .colorPicker": {
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "1rem",
        position: "relative",
        "& .colorPickerSelected": {
          borderRadius: "inherit",
          position: "absolute",
          //   background: "rgba(128, 128, 128, 0.6)",
          zIndex: 2,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      },
      "& .paperSizePicker": {
        padding: "1.2rem 2.8rem",
        paddingLeft: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
        width: "fit-content",
        marginBottom: "5rem",
      },
      "& #sizePicker": {
        width: "3.5rem",
        height: "3.5rem",
        fontWeight: 700,
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& .sizeSelected": {
        background: "#000",
        color: "#fff",
      },
      "& .addToCart": {
        display: "flex",
        alignItems: "center",
        background: "rgba(115, 15, 17, 1)",
        color: "#fff",
        width: "fit-content",
        padding: "1.3rem 5rem",
        borderRadius: "1rem",
        "@media (max-width: 960px)": {
          margin: "0 auto",
        },
      },
    },
  },
  "& .subCoverImg": {
    flexGrow: 0,
    maxWidth: "30%",
    flexBasis: "30%",
    "@media (max-width: 960px)": {
      maxWidth: "80%",
      flexBasis: "80%",
      margin: "auto",
      marginBottom: "4rem",
    },
  },
});

export default function ProductDetails(props) {
  const item = props.item;
  //   const slug = item.name.replace(" ", "-");
  const classes = useStyles();
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation((item) => addItemToCart(item));

  const handleAddToCartClick = async () => {
    const payload = {
      productId: item._id,
      productName: item.name,
      price: item.price,
      sharedPreference: getOrStoreId(),
    };
    const res = await mutateAsync(payload);
    if (res.status) {
      window.location.reload();
    }
  };

  const handleAddItemToCart = async () => {
    const payload = {
      productId: item._id,
      productName: item.name,
      price: item.price,
      sharedPreference: getOrStoreId(),
    };

    const res = await mutateAsync(payload);
    // console.log({ va });
    if (res.status) {
      history.replace("/cart");
    }
  };

  const [value] = React.useState(2.5);

  // const selectColor = () => {
  //   document
  //     .getElementById("colorPickerSelected")
  //     .classList.toggle("colorPickerSelected");
  // };

  // const color = [
  //   { background: "red", overlay: "yellow", selectColor: selectColor },
  //   { background: "yellow", overlay: "red", selectColor: selectColor },
  // ];

  // const selectSize = () => {
  //   document.getElementById("sizePicker").classList.toggle("sizeSelected");
  // };

  return (
    <Grid container justifyContent="space-between" className={classes.root}>
      <Grid item={true} xs={12} sm={6} md={6} className="gridShopItem">
        <div className="shopItemContainer">
          <div className="itemCoverImg">
            <img
              className="w-100 h-100"
              src={props.displayImage}
              alt={props.name}
            />
          </div>
          <Grid container justifyContent="space-between" className="subCover">
            <Grid item={true} xs={3} md={3} className="subCoverImg"></Grid>
            <Grid item={true} xs={3} md={3} className="subCoverImg"></Grid>
            <Grid item={true} xs={3} md={3} className="subCoverImg"></Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item={true} xs={12} sm={5} md={5} className="shopItemDetails">
        <h1 className="itemName mb-4">{props.name}</h1>
        <h3 className="itemPrice fw-600 mb-4">
          # {props.price} / $ {props.price / 20}
        </h3>
        <div className="itemStarReview mb-2 d-flex align-items-center">
          <Rating
            name="customers-rating"
            value={value}
            precision={0.5}
            readOnly
          />
          {/* <HashLink
              to={{ state: item, pathname: "/shop/details#viewReviews" }}
              className="ms-4 viewReviewBtn"
            >
              View reviews
            </HashLink> */}
        </div>
        <div className="itemStarReview d-flex align-items-center">
          <span className="reviewCount">138 Reviews</span>
          <CommentDialog />
        </div>
        <Divider className="my-5" />
        <div className="itemDescription  ">{props.description}</div>
        <Divider className="my-5" />
        {/* <h3 className="selectHeader">Colors</h3> */}
        {/* <Paper elevation={3} className="paperColorPicker ">
            {color.map((color) => (
              <span
                onClick={color.selectColor}
                style={{ background: `${color.background}` }}
                className="colorPicker cursor-pointer ms-4"
                id="colorPicker"
              >
                <span
                  id="colorPickerSelected"
                  style={{ background: `${color.overlay}` }}
                ></span>
              </span>
            ))}
          </Paper> */}
        {/* {item.sizes.length > 0 && <h3 className="selectHeader">Size</h3>}
          {item.sizes.map((size) => ( */}
        <Paper elevation={3} className="paperSizePicker ">
          <span
            // onClick={selectSize}
            id="sizePicker"
            className="cursor-pointer ms-4"
          >
            {props.size}
          </span>
        </Paper>
        {/*
          ))} */}
        <div className="d-flex">
          <span
            type="button"
            onClick={handleAddToCartClick}
            className="addToCart fw-700 me-4"
          >
            Add to Cart
          </span>

          {!isLoading && (
            <span
              type="button"
              onClick={handleAddItemToCart}
              className="addToCart fw-700"
            >
              Buy Now
            </span>
          )}
        </div>
      </Grid>
    </Grid>
  );
}
