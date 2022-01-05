import React from "react";

export default function SingleCartRow() {
  return (
    <div className="cartRowMain mb-[4rem]">
      <div className="row grid grid-cols-2 gap-[8rem]">
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
              <h6>- 1 +</h6>
            </div>
            <div className="col-md-4 flex justify-between">
              <h6>15,000</h6>
              <button className="removeBtn">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
