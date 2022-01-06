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
      <CategoryNav styles="flex text-center sm:border-b-[0.15rem] border-[#5E6368]">
        <div>Cart</div>
      </CategoryNav>
      {data && data.status ? (
        <div className="px-[3rem] sm:px-[6rem] pt-[4rem] sm:pt-[8rem] ">
          <CartRowContainer
            items={data.body}
            refetch={refetch}
            setTotal={setTotal}
          />
          <CartFooter total={overallAllTotal} />
        </div>
      ) : (
        <div className="w-1/2 mx-auto">
          <div className="text-[2rem]">Nothing de your cart</div>
        </div>
      )}
    </Layout>
  );
}
