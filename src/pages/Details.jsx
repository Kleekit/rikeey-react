import React, { useState } from "react";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import ProductDetailsCard from "../components/Utility/ProductDetailsCard";

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

  return (
    <Layout>
      <CategoryNav>
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="px-[6rem] py-[4rem] ">
        <ProductDetailsCard />
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
