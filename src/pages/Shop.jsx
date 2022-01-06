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
            <ProductCard.Image>
              https://randomuser.me/api/portraits/women/90.jpg
            </ProductCard.Image>
            <ProductCard.Name>
              Motion Seamless Crop - Musk Pink
            </ProductCard.Name>
            <ProductCard.Price>N 30,000</ProductCard.Price>
          </ProductCard>
          <ProductCard>
            <ProductCard.Image>
              https://randomuser.me/api/portraits/women/90.jpg
            </ProductCard.Image>
            <ProductCard.Name>
              Motion Seamless Crop - Musk Pink
            </ProductCard.Name>
            <ProductCard.Price>N 30,000</ProductCard.Price>
          </ProductCard>
          <ProductCard>
            <ProductCard.Image>
              https://randomuser.me/api/portraits/women/90.jpg
            </ProductCard.Image>
            <ProductCard.Name>
              Motion Seamless Crop - Musk Pink
            </ProductCard.Name>
            <ProductCard.Price>N 30,000</ProductCard.Price>
          </ProductCard>
          <ProductCard>
            <ProductCard.Image>
              https://randomuser.me/api/portraits/women/90.jpg
            </ProductCard.Image>
            <ProductCard.Name>
              Motion Seamless Crop - Musk Pink
            </ProductCard.Name>
            <ProductCard.Price>N 30,000</ProductCard.Price>
          </ProductCard>
          <ProductCard>
            <ProductCard.Image>
              https://randomuser.me/api/portraits/women/90.jpg
            </ProductCard.Image>
            <ProductCard.Name>
              Motion Seamless Crop - Musk Pink
            </ProductCard.Name>
            <ProductCard.Price>N 30,000</ProductCard.Price>
          </ProductCard>
        </div>
        <div className="border-b-[0.15rem] border-[#848688] mx-auto w-[50%] sm:w-[75%] mb-[10rem]"></div>
        <div className="grid grid-cols-2 gap-[8rem] mb-[12rem]">
          <AccessoriesCard
            src={
              "https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwc3BvcnRzJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            accessName={"Women"}
          />
          <AccessoriesCard
            src={
              "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            accessName={"Men"}
          />
        </div>
        <AccessoriesCard
          src={
            "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          accessName={"Accessories"}
        />
      </div>
    </Layout>
  );
}

export default Shop;
