import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  Rating,
} from "@mui/material";
import CustomContainer from "../components/Navigation/CustomContainer";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Draggable from "react-draggable";
// import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    padding: "5rem 4rem",
    "& .shopItemContent": {
      marginBottom: "10rem",
      "& .gridShopItem": {
        // padding: "0 3rem",
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
    "& .moreCatalog": {
      marginBottom: "10rem",
      "& .catalogItem": {
        marginTop: "3rem",
        height: "45vh",
        border: "0.1rem solid #000",
        "@media (max-width: 860px)": {
          height: "55vh",
        },
        "@media (max-width: 600px)": {
          height: "35vh",
        },
        "@media (max-width: 480px)": {
          height: "27vh",
        },
      },
    },
    "& .reviews": {
      marginBottom: "10rem",
      "& .customerReview": {
        marginTop: "3rem",
        padding: "3rem 4.5rem",
        borderRadius: "1rem",
        background: "rgba(251, 251, 251, 1)",
        border: "0.1rem solid rgba( 220, 220, 220, .5)",
        "@media (max-width: 600px)": {
          padding: "1.5rem 2.5rem",
        },
        "& .customer": {
          marginBottom: "5rem",
          "& .customerImg": {
            width: "8rem",
            height: "8rem",
            clipPath: "circle() !important",
            background: "grey",
            marginRight: "3rem",
          },
        },
      },
    },
    "& .dividerHeader": {
      width: "25%",
      "@media (max-width: 960px)": {
        width: "60%",
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
    "& .containerCatalogItem": {
      flexGrow: 0,
      maxWidth: "22%",
      flexBasis: "22%",
      "@media (max-width: 860px)": {
        maxWidth: "46%",
        flexBasis: "46%",
        marginBottom: "5rem",
      },
    },
    "& .reviewContainer": {
      width: "90%",
      margin: "auto",
      "@media (max-width: 860px)": {
        width: "100%",
      },
    },
    "& .customerReview": {
      flexGrow: 0,
      maxWidth: "45%",
      flexBasis: "45%",
      "@media (max-width: 600px)": {
        maxWidth: "100%",
        flexBasis: "100%",
        marginBottom: "5rem",
      },
    },
  },
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function Details() {
  const classes = useStyles();

  const customConfig = {
    customStyle: `${classes.root}`,
  };

  const [count, setCount] = React.useState(0);

  const [value] = React.useState(2.5);
  // setValue
  const [openComment, setOpenComment] = React.useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  const selectColor = () => {
    document
      .getElementById("colorPickerSelected")
      .classList.toggle("colorPickerSelected");
  };

  const color = [
    { background: "red", overlay: "yellow", selectColor: selectColor },
    { background: "yellow", overlay: "red", selectColor: selectColor },
  ];

  const selectSize = () => {
    document.getElementById("sizePicker").classList.toggle("sizeSelected");
  };

  const CommentDialog = (
    <div>
      <span
        onClick={handleClickOpenComment}
        className="ms-4 writeReviewBtn cursor-pointer"
      >
        Write a Review
      </span>
      <Dialog
        open={openComment}
        onClose={handleCloseComment}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ fontSize: "1.5rem" }}
      >
        <DialogTitle
          style={{ cursor: "move", fontSize: "1.8rem", fontWeight: 600 }}
          id="draggable-dialog-title"
        >
          Add a Comment
        </DialogTitle>
        <DialogContent className="pt-3">
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control mb-4"
              placeholder="Leave a comment here"
              style={{ height: "15rem" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <div className="input-group mb-4">
            <input type="file" className="form-control" />
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontSize: "1.2rem" }}
            autoFocus
            onClick={handleCloseComment}
          >
            Cancel
          </Button>
          <Button style={{ fontSize: "1.2rem" }} onClick={handleCloseComment}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  return (
    <CustomContainer {...customConfig}>
      <Grid
        container
        justifyContent="space-between"
        className="shopItemContent"
      >
        <Grid items xs={12} sm={6} md={6} className="gridShopItem">
          <div className="shopItemContainer">
            <div className="itemCoverImg"></div>
            <Grid container justifyContent="space-between" className="subCover">
              <Grid items xs={3} md={3} className="subCoverImg"></Grid>
              <Grid items xs={3} md={3} className="subCoverImg"></Grid>
              <Grid items xs={3} md={3} className="subCoverImg"></Grid>
            </Grid>
          </div>
        </Grid>
        <Grid items xs={12} sm={5} md={5} className="shopItemDetails">
          <h1 className="itemName mb-4">Contour Seamless Leggings</h1>
          <h3 className="itemPrice fw-600 mb-4"># 7,000.00 / $ 17</h3>
          <div className="itemStarReview mb-2 d-flex align-items-center">
            <Rating
              name="customers-rating"
              value={value}
              precision={0.5}
              readOnly
            />
            <HashLink
              to="/shop/details#viewReviews"
              className="ms-4 viewReviewBtn"
            >
              View reviews
            </HashLink>
          </div>
          <div className="itemStarReview d-flex align-items-center">
            <span className="reviewCount">138 Reviews</span>
            {CommentDialog}
            {/* <DraggableDialog /> */}
          </div>
          <Divider className="my-5" />
          <div className="itemDescription  ">
            The Kendall set is a collection as vibrant as you are; a collection
            that empowers you to let yourself glow. With performance and
            vibrance equally at the fore of design. It features a cross body
            top, impact sport bra and a leggings.
          </div>
          <Divider className="my-5" />
          <h3 className="selectHeader">Colors</h3>
          <Paper elevation={3} className="paperColorPicker ">
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
          </Paper>
          <h3 className="selectHeader">Size</h3>
          <Paper elevation={3} className="paperSizePicker ">
            <span
              onClick={selectSize}
              id="sizePicker"
              className="cursor-pointer ms-4"
            >
              s
            </span>
          </Paper>
          <span
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
            className="addToCart fw-700"
          >
            Add to Cart
          </span>
        </Grid>
      </Grid>
      <div className="moreCatalog">
        <h2 className="header text-center">Something Light</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <Grid container justifyContent="space-between">
          <Grid items xs={12} md={2} className="containerCatalogItem">
            <div className="catalogItem mb-4"></div>
            <div className="catalogItemDetails">
              <div className="shop-col-text">
                <p className="fw-700">Lycra Athletic Short</p>
                <p># 7,000.00 / $ 17</p>
                <p className="fs-sm mb-m8">Available in 3 colors</p>
                <svg
                  width="60"
                  height="13"
                  viewBox="0 0 64 16"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#CA3030" />
                  <circle cx="32" cy="8" r="8" fill="#B9F43B" />
                  <circle cx="56" cy="8" r="8" fill="#B73333" />
                </svg>
              </div>
            </div>
          </Grid>
          <Grid items xs={12} md={2} className="containerCatalogItem">
            <div className="catalogItem mb-4"></div>
            <div className="catalogItemDetails">
              <div className="shop-col-text">
                <p className="fw-700">Lycra Athletic Short</p>
                <p># 7,000.00 / $ 17</p>
                <p className="fs-sm mb-m8">Available in 3 colors</p>
                <svg
                  width="60"
                  height="13"
                  viewBox="0 0 64 16"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#CA3030" />
                  <circle cx="32" cy="8" r="8" fill="#B9F43B" />
                  <circle cx="56" cy="8" r="8" fill="#B73333" />
                </svg>
              </div>
            </div>
          </Grid>
          <Grid items xs={12} md={2} className="containerCatalogItem">
            <div className="catalogItem mb-4"></div>
            <div className="catalogItemDetails">
              <div className="shop-col-text">
                <p className="fw-700">Lycra Atheletic Short</p>
                <p># 7,000.00 / $ 17</p>
                <p className="fs-sm mb-m8">Available in 3 colors</p>
                <svg
                  width="60"
                  height="13"
                  viewBox="0 0 64 16"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#CA3030" />
                  <circle cx="32" cy="8" r="8" fill="#B9F43B" />
                  <circle cx="56" cy="8" r="8" fill="#B73333" />
                </svg>
              </div>
            </div>
          </Grid>
          <Grid items xs={12} md={2} className="containerCatalogItem">
            <div className="catalogItem mb-4"></div>
            <div className="catalogItemDetails">
              <div className="shop-col-text">
                <p className="fw-700">Lycra Atheletic Short</p>
                <p># 7,000.00 / $ 17</p>
                <p className="fs-sm mb-m8">Available in 3 colors</p>
                <svg
                  width="60"
                  height="13"
                  viewBox="0 0 64 16"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#CA3030" />
                  <circle cx="32" cy="8" r="8" fill="#B9F43B" />
                  <circle cx="56" cy="8" r="8" fill="#B73333" />
                </svg>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="reviews" id="viewReviews">
        <h2 className="header text-center">Reviews</h2>
        <Divider variant="inset" className="my-5 mx-auto dividerHeader" />
        <Grid
          container
          justifyContent="space-between"
          className="reviewContainer"
        >
          <Grid items xs={12} md={5} className="customerReview">
            <div className="customer d-flex align-items-center">
              <div className="customerImg"></div>
              <div className="customerInfo">
                <div className="customerName mb-4 fw-600">Adrian</div>
                <Rating
                  name="customers-rating"
                  value={value}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <div className="reviewInfo">
              <div className="reviewTitle fw-700 mb-4">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="reviewComment">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore impedit perspiciatis ipsum! Perspiciatis modi ipsa minus
                fuga voluptatum ea cumque nemo exercitationem, explicabo,
                molestiae, autem quas earum dolor laborum quidem facilis.
                Corrupti tempora explicabo ullam, expedita cupiditate obcaecati.
                Amet quae asperiores dolorem earum illum culpa molestias
                adipisci ipsum nobis voluptate ex magni repellat atque sed sit
                ad, dolorum unde doloribus, perspiciatis nisi temporibus quod
                exercitationem corrupti ab. Facilis fugiat nihil explicabo
              </div>
              <div className="customerName mt-4 fw-600">Adrian</div>
            </div>
          </Grid>
          <Grid items xs={12} md={5} className="customerReview">
            <div className="customer d-flex align-items-center">
              <div className="customerImg"></div>
              <div className="customerInfo">
                <div className="customerName mb-4 fw-600">Adrian</div>
                <Rating
                  name="customers-rating"
                  value={value}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <div className="reviewInfo">
              <div className="reviewTitle fw-700 mb-4">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="reviewComment">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore impedit perspiciatis ipsum! Perspiciatis modi ipsa minus
                fuga voluptatum ea cumque nemo exercitationem, explicabo,
                molestiae, autem quas earum dolor laborum quidem facilis.
                Corrupti tempora explicabo ullam, expedita cupiditate obcaecati.
                Amet quae asperiores dolorem earum illum culpa molestias
                adipisci ipsum nobis voluptate ex magni repellat atque sed sit
                ad, dolorum unde doloribus, perspiciatis nisi temporibus quod
                exercitationem corrupti ab. Facilis fugiat nihil explicabo
              </div>
              <div className="customerName mt-4 fw-600">Adrian</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </CustomContainer>
  );
}

export default Details;
