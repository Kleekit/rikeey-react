import React from "react";
import CartFooter from "../components/Utility/CartFooter";
import CartRowContainer from "../components/Utility/CartRowContainer";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";

export default function Cart() {
  return (
    <Layout>
      <CategoryNav styles="flex">
        <div>Cart</div>
      </CategoryNav>
      <div className="px-[3rem] sm:px-[6rem] pt-[4rem] sm:pt-[8rem] ">
        <CartRowContainer />
        <CartFooter />
      </div>
    </Layout>
  );
}
