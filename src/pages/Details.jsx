import React, { useState } from "react";
import { useQuery } from "react-query";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import DetailsCard from "../components/Utility/DetailsCard";
import { getProductDetails } from "../methods/product.method";
import { useParams } from "react-router-dom";

export default function Details() {
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  function handleSize(value) {
    if (size.includes(value)) {
      size.filter((cur) => cur !== value);
    } else {
      size.push(value);
    }
  }

  function handleColor(value) {
    if (size.includes(value)) {
      size.filter((cur) => cur !== value);
    } else {
      size.push(value);
    }
  }

  const productID = useParams();

  const { isLoading, isError, data } = useQuery(
    ["getProduct", { productId: productID.productId }],
    getProductDetails
  );

  if (isError) {
    return "bros error de.......";
  }

  if (isLoading) {
    return "Loading.......";
  }

  let item;
  if (data && data.status) {
    item = data.body;
  }

  return (
    <Layout>
      <CategoryNav>
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="px-[6rem] py-[4rem] ">
        <DetailsCard />
        <div className="similar-container mb-[12rem]">
          <div className="text-[2rem] font-bold underline underline-offset-2 mb-[2.3rem]">
            You may like
          </div>
          <div className="flex flex-wrap mx-[-1.4%] ">
            <ProductCard>
              <ProductCard.Name>
                Motion Seamless Crop - Musk Pink
              </ProductCard.Name>
              <ProductCard.Price>N 30,000</ProductCard.Price>
            </ProductCard>
            <ProductCard>
              <ProductCard.Name>
                Motion Seamless Crop - Musk Pink
              </ProductCard.Name>
              <ProductCard.Price>N 30,000</ProductCard.Price>
            </ProductCard>
            <ProductCard>
              <ProductCard.Name>
                Motion Seamless Crop - Musk Pink
              </ProductCard.Name>
              <ProductCard.Price>N 30,000</ProductCard.Price>
            </ProductCard>
            <ProductCard>
              <ProductCard.Name>
                Motion Seamless Crop - Musk Pink
              </ProductCard.Name>
              <ProductCard.Price>N 30,000</ProductCard.Price>
            </ProductCard>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] mb-[12rem]">
          <AccessoriesCard />
          <AccessoriesCard />
        </div>
        <AccessoriesCard />
      </div>
    </Layout>
  );
}
