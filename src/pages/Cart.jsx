import React, { useState } from "react";
import { useQuery } from "react-query";
import CartFooter from "../components/Utility/CartFooter";
import CartRowContainer from "../components/Utility/CartRowContainer";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import { getCartItem } from "../methods/cart.method";

export default function Cart() {
  const [total, setTotal] = useState(0);

  const { isLoading, data, isError, refetch } = useQuery(
    "getCartItem",
    getCartItem
  );

  if (isError) {
    return <h3>Error....</h3>;
  }
  if (isLoading) {
    return <h3>Error....</h3>;
  }
  let overallAllTotal = 0;

  if (data && data.status) {
    for (let item of data.body) {
      overallAllTotal += item.price * item.quantity;
    }
  }

  return (
    <Layout>
      <CategoryNav styles="flex">
        <div>Cart</div>
      </CategoryNav>
      <div className="px-[3rem] sm:px-[6rem] pt-[4rem] sm:pt-[8rem] ">
        <CartRowContainer
          items={data.body}
          refetch={refetch}
          setTotal={setTotal}
        />
        <CartFooter total={overallAllTotal} />
      </div>
    </Layout>
  );
}
