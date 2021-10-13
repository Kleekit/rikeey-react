import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";

function ShoppingList() {
  const customConfig = {
    customStyle: "pt-4 px-4 row",
  };

  return (
    <CustomContainer {...customConfig}>
      <div className="cart mx-auto">
        <div className="cart-head  ">
          <div className="w-40 my-auto ps-4">Items</div>
          <div className="w-20 my-auto text-center">Quantity</div>
          <div className="w-20 my-auto text-center">Prices</div>
          <div className="w-20 my-auto text-center">Subtotal</div>
        </div>
        <div className="cart-body ">
          <div className="row  cart-bb">
            <div className="w-40 cart-br d-flex">
              <div className="row mx-0 px-4">
                <div className="col-md-6 h-75 text-center p-0 my-auto">
                  <img
                    className=" w-70 h-100"
                    src="./images/women-set.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-0 my-auto text-center ">
                  Contour Seamless Leggings
                </div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="text-center m-auto">
                <div className="btn bg-grey mb-2 cart-addbtn"> - 2 +</div>
                <div className="fs-sm text-center red">Remove</div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="m-auto">$ 45.55</div>
            </div>
            <div className="w-20 d-flex">
              <div className="m-auto">$ 45.55</div>
            </div>
          </div>

          <div className="row  cart-bb">
            <div className="w-40 cart-br d-flex">
              <div className="row mx-0 px-4">
                <div className="col-md-6 h-75 text-center p-0 my-auto">
                  <img
                    className=" w-70 h-100"
                    src="./images/women-set.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-0 my-auto text-center">
                  Contour Seamless Leggings
                </div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="text-center m-auto">
                <div className="btn bg-grey mb-2 cart-addbtn"> - 2 +</div>
                <div className="fs-sm text-center red">Remove</div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="m-auto">$ 45.55</div>
            </div>
            <div className="w-20 d-flex">
              <div className="m-auto">$ 45.55</div>
            </div>
          </div>

          <div className="row  ">
            <div className="w-40 cart-br d-flex">
              <div className="row mx-0 px-4">
                <div className="col-md-6 h-75 text-center p-0 my-auto">
                  <img
                    className=" w-70 h-100"
                    src="./images/women-set.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-0 my-auto text-center ">
                  Contour Seamless Leggings
                </div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="text-center m-auto">
                <div className="btn bg-grey mb-2 cart-addbtn"> - 2 +</div>
                <div className="fs-sm text-center red">Remove</div>
              </div>
            </div>
            <div className="w-20 d-flex cart-br">
              <div className="m-auto">$ 45.55</div>
            </div>
            <div className="w-20 d-flex">
              <div className="m-auto">$ 45.55</div>
            </div>
          </div>
        </div>

        <div className="total-sec mt-3 ms-auto">
          <div className="cart-total mb-3 d-flex ps-5 pe-2 pb-2  justify-content-between">
            <div>Total</div>
            <div>$ 232.2</div>
          </div>
          <a href="/shop">
            <div className="d-flex mb-3 justify-content-end pe-3 fs-lgr red">
              Continue shopping
            </div>
          </a>

          <a
            href="cart/checkout"
            className="d-flex ms-auto py-2 justify-content-center me-3 w-80 br-2 bg-red white "
          >
            Checkout
          </a>
        </div>
      </div>
    </CustomContainer>
  );
}

export default ShoppingList;
