import React from "react";
import CartFooter from "../components/Utility/CartFooter";
import CartRowContainer from "../components/Utility/CartRowContainer";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";

/* Cart Items Container */

export default function Cart() {
  return (
    <Layout>
      <CategoryNav>
        <div>Cart</div>
      </CategoryNav>
      <div className="px-[6rem] pt-[8rem] ">
        <CartRowContainer />
        <CartFooter />
      </div>
    </Layout>
  );
}
