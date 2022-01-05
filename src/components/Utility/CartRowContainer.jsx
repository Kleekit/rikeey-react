import React from "react";
import SingleCartRow from "./SingleCartRow";

// .cartItemsContainer {
//     padding-top: 3rem;
//     border-bottom: 0.6px solid #5e6368;
//     padding: 20px 0px;
//   }

//   .cartContainerHeader {
//     border-bottom: 0.6px solid #5e6368;
//   }

//   .cartItemsContainer h4 {
//     font-size: 1.2rem;
//     color: #5e6368;
//     font-weight: 400;
//   }

//   /* Single Cart Row Design */
//   .cartRowMain {
//     margin-top: 2rem;
//   }

//   .cartItemImg {
//     border-radius: 0.8rem;
//   }

//   .removeBtn {
//     border: none;
//     background-color: #fff;
//   }

//   .customItemText {
//     font-size: 0.8rem;
//     color: #5e6368;
//   }

//   .cardFooterItemOne {
//     margin-bottom: 2rem;
//     border-bottom: 0.6px solid #5e6368;
//   }

//   .proceed {
//     border: none;
//     background-color: #feb9ba;
//     padding: 8px 20px;
//     font-size: 0.9rem;
//     border-radius: 0.5rem;
//   }

export default function CartRowContainer() {
  return (
    <div className="cartItemsContainer ">
      <div className="cartContainerHeader mb-[2rem]">
        <div className="row grid grid-cols-2 gap-[8rem] pl-[8rem]">
          <div className="col-md-6">
            <h5 className="font-bold">Product</h5>
          </div>
          <div className="col-md-6">
            <div className="row grid grid-cols-3 gap-[8rem]">
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
      <div className="border-y-[0.1rem] border-[#5E6368] py-[4rem] pl-[8rem]">
        <SingleCartRow />
        <SingleCartRow />
        <SingleCartRow />
        <SingleCartRow />
      </div>
    </div>
  );
}
