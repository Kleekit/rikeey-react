import React, { useState } from "react";
// import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
// import { useQuery } from "react-query";
// import { getCartItem } from "../../methods/cart.method";
import SingleCartRow from "./SingleCartRow";

export default function CartRowContainer({ items, refetch }) {
  return (
    <div className="cartItemsContainer ">
      <div className="cartContainerHeader hidden md:block mb-[2rem]">
        <div className="row grid grid-cols-6 gap-[4rem] pl-[8rem]">
          <div className="col-span-3">
            <h5 className="font-bold">Product</h5>
          </div>
          <div className="col-span-3">
            <div className="row grid grid-cols-3 gap-[8rem] ">
              <div className="col-md-4">
                <h5 className="font-bold">Price</h5>
              </div>
              <div className="col-md-4">
                <h5 className="font-bold">Quantity</h5>
              </div>
              <div className="col-md-4">
                <h5 className="font-bold">Total</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:border-y-[0.1rem] border-[#5E6368] py-[5rem] px-[2rem] md:pl-[8rem]">
        {/* <SingleCartRow /> */}
        {items.map((item) => (
          <SingleCartRow item={item} refetch={refetch} key={item.productName} />
        ))}
      </div>
    </div>
  );
}
