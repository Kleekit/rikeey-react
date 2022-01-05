import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

export default function SingleCartRow() {
  return (
    <div className="cartRowMain mb-[4rem]">
      <div className="row  grid grid-cols-2 gap-[8rem]">
        <div className="col-md-6 flex">
          <img
            className="img-fluid cartItemImg rounded-lg"
            src="https://randomuser.me/api/portraits/women/82.jpg"
            alt="cart item"
          />
          <div>
            <h6 className="mx-3 font-bold">Motion Seamless Crop - Musk Pink</h6>

            <p className="mx-3 customItemText text-gray-500">Grey Crop Top</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row grid grid-cols-3 gap-[8rem]">
            <div className="col-md-4">
              <h6 className="font-bold">₦15,000</h6>
            </div>
            <div className="col-md-4">
              <h6 className="w-1/2 flex items-center justify-between">
                <AiOutlineMinus /> 1 <AiOutlinePlus />
              </h6>
            </div>
            <div className="col-md-4 flex justify-between">
              <h6 className="font-bold">₦15,000</h6>
              <button className="removeBtn">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
