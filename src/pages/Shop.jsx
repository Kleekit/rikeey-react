import React from "react";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import ShopHero from "../components/Utility/ShopHero";

function Shop() {
  return (
    <Layout>
      <CategoryNav>
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="p-[6rem]">
        <ShopHero>
          <ShopHero.Name>Men</ShopHero.Name>
          <ShopHero.Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </ShopHero.Description>
        </ShopHero>
        <div className="flex flex-wrap mx-[-1.4%] mb-[10rem] ">
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
        <div className="border-b-[0.15rem] border-[#848688] mx-auto w-[50%] sm:w-[75%] mb-[10rem]"></div>
        <AccessoriesCard />
      </div>
    </Layout>
  );
}

export default Shop;
