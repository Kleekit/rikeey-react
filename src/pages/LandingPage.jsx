import React from "react";
import Layout from "../components/Utility/Layout";
import HeroCarousel from "../components/Utility/HeroCarousel";
import ProductCard from "../components/Utility/ProductCard";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CardNFloatedText from "../components/Utility/CardNFloatedText";

function LandingPage() {
  const customConfig = {
    // customStyle: `${classes.root}`,
  };

  return (
    <Layout {...customConfig}>
      <HeroCarousel styles="mb-[2rem]" />
      <div className="p-[6rem]">
        <div className="text-center mb-[12rem]">
          <div className="text-[5rem] font-bold mb-[1rem]">Sweat in Style</div>
          <div className="text-[2rem] font-[500] mb-[3.5rem]">
            Made for your comfort
          </div>
          <a
            href="/shop"
            className="inline text-[2rem] p-[1.5rem] rounded-[3rem] cursor-pointer font-bold bg-[#FEB9BA]"
          >
            Shop Now
          </a>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] mb-[12rem]">
          <AccessoriesCard />
          <AccessoriesCard />
          {/* <CardNFloatedText
            imageUrl={
              "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            text={"Men"}
          /> */}
          {/* <CardNFloatedText
            imageUrl={
              "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            text={"Men"}
          /> */}
        </div>
        <div className="new-release-container mb-[12rem]">
          <div className="text-[2rem] font-bold underline underline-offset-2 mb-[2.3rem]">
            New Release
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
        <AccessoriesCard />
      </div>
    </Layout>
  );
}

export default LandingPage;
