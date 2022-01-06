import React from "react";
import { useQuery } from "react-query";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import ShopHero from "../components/Utility/ShopHero";
import ShopSideBar from "../components/Shop/ShopSidebar";
import OpenFIlter from "../components/Shop/OpenFIlter";
import FilterBottom from "../components/Shop/FilterBottom";
import { getProduct } from "../methods/product.method";

export default function Men() {
  const { isLoading, data, isError, refetch } = useQuery(
    "getProduct",
    getProduct
  );
  return (
    <Layout>
      <CategoryNav styles="hidden md:flex">
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="p-[3rem] sm:p-[6rem]">
        <ShopHero>
          <ShopHero.Name>Men</ShopHero.Name>
          <ShopHero.Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </ShopHero.Description>
        </ShopHero>
        <ShopSideBar openFilter={<OpenFIlter />}>
          <div className="text-[2rem]">
            <FilterBottom />
          </div>
        </ShopSideBar>
        <div className="flex flex-wrap mx-[-4%] sm:mx-[-3%] md:mx-[-1.4%] mb-[10rem] ">
          {data &&
            data.body.map((product) => (
              <ProductCard
                styles="px-[4%] sm:px-[3%] md:px-[1.4%] w-1/2 sm:w-1/3 md:w-1/4 mb-[5rem] sm:mb-[8rem]"
                link={`/details/${product._id}`}
                key={product._id}
              >
                <ProductCard.Image>
                  {/* {product.displayImage.url} */}
                  https://images.unsplash.com/photo-1540254597053-3901b858d40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
                </ProductCard.Image>
                <ProductCard.Name>{product.name}</ProductCard.Name>
                <ProductCard.Price>N {product.price}</ProductCard.Price>
              </ProductCard>
            ))}
        </div>
        <div className="border-b-[0.15rem] border-[#848688] mx-auto w-full sm:w-[75%] mb-[10rem]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8rem] mb-[12rem]">
          <AccessoriesCard
            src={
              "https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwc3BvcnRzJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            accessName={"Women"}
            link="/women"
          />
          <AccessoriesCard
            src={
              "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            accessName={"Men"}
            link="/men"
          />
        </div>
        <AccessoriesCard
          src={
            "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          accessName={"Accessories"}
          link="/accessories"
        />
      </div>
    </Layout>
  );
}
