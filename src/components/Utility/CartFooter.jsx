import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function CartFooter({ total }) {
  const { user, isUser } = useAuth();
  return (
    <div className="sm:w-1/2 ml-auto mt-[4rem]">
      <div className="row grid grid-cols-2 gap-[8rem] cardFooterItemOne items-center justify-center">
        <div className="">
          <p>Subtotal</p>

          <h6>
            Shipping <small>(Nigeria)</small>
          </h6>

          <a href="/" className="linkCustom">
            International
          </a>
        </div>

        <div className="ml-36">
          <p>₦40,000</p>

          <p className="">₦2,300</p>
        </div>
      </div>
      <div className="row grid grid-cols-2 gap-[8rem]">
        <div className="col-md-6">
          <h6>Total</h6>
        </div>
        <div className="col-md-6">
          <h6 className="ml-36">₦{total}</h6>
          {!isUser ? (
            <a href="/checkout">
              <button className="proceed mr-8 mt-8">
                Provide your details
              </button>
            </a>
          ) : (
            <a href="/checkout/payment">
              <button className="proceed mr-8 mt-8">Proceed to Checkout</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
