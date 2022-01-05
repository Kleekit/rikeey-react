import React from "react";
import { useMutation } from "react-query";
import { changeQuantity, removeItemFormCart } from "../../methods/cart.method";

export default function SingleCartRow({ item, refetch }) {
  const { mutateAsync, isLoading } = useMutation((item) =>
    removeItemFormCart(item)
  );

  const handleRemoveItem = async () => {
    const payload = {
      cartItemId: item._id,
    };
    const res = await mutateAsync(payload);
    if (res.status) {
      refetch();
    }
  };

  return (
    <div className="cartRowMain mb-[4rem]">
      <div className="row  grid grid-cols-2 gap-[8rem]">
        <div className="col-md-6 flex">
          <img
            className="img-fluid cartItemImg"
            src="https://randomuser.me/api/portraits/women/82.jpg"
            alt="cart item"
          />
          <div>
            <h6 className="mx-3">Motion Seamless Crop - Musk Pink</h6>

            <p className="mx-3 customItemText">Grey Crop Top</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row grid grid-cols-3 gap-[8rem]">
            <div className="col-md-4">
              <h6>15,000</h6>
            </div>
            <div className="col-md-4">
              <ChangeQuantity item={item} refetch={refetch} />
            </div>
            <div className="col-md-4 flex justify-between">
              <h6>15,000</h6>
              <button onClick={handleRemoveItem} className="removeBtn">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChangeQuantity = ({ item, refetch }) => {
  const { mutateAsync, isLoading } = useMutation((item) =>
    changeQuantity(item)
  );

  const handleQuantity = async (num) => {
    if (num > 0) {
      await mutateAsync({ _id: item._id, quantity: num });
      // refetch
      refetch();
    }
  };

  return (
    <>
      {!isLoading && (
        <span className="fw-600 cartAddBtn">
          <span
            onClick={() => handleQuantity(item.quantity - 1)}
            className="decreaseBtn"
            id="decrease"
          >
            -
          </span>
          <span className="itemAmount ">{item.quantity}</span>
          <span
            onClick={() => handleQuantity(item.quantity + 1)}
            className="increaseBtn"
            id="increase"
          >
            +
          </span>
        </span>
      )}
    </>
  );
};
