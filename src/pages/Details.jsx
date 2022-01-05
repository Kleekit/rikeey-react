import React, { useState } from "react";
import { useQuery } from "react-query";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import DetailsCard from "../components/Utility/DetailsCard";
import { getProduct, getProductDetails } from "../methods/product.method";
import { useParams } from "react-router-dom";
import HeroCarousel from "../components/Utility/HeroCarousel";
import { SwiperSlide } from "swiper/react";

export default function Details() {
  const [sizes, setSize] = useState(Array);
  const [colors, setColor] = useState(Array);

  const sizesFromDb = ["sm", "md", "lg", "xl"];
  const colorsFromDb = ["red", "blue", "green"];

  function handleSize(value) {
    if (sizes.includes(value)) {
      for (let i = 0; i < sizes.length; i++) {
        if (value === sizes[i]) {
          sizes.splice(i, 1);
          break;
        }
      }
      setSize([...sizes]);
    } else {
      sizes.push(value);
      setSize([...sizes]);
    }
    console.log(sizes);
  }

  function handleColor(value) {
    if (colors.includes(value)) {
      for (let i = 0; i < colors.length; i++) {
        if (value === colors[i]) {
          colors.splice(i, 1);
          break;
        }
      }
      setColor([...colors]);
    } else {
      colors.push(value);
      setColor([...colors]);
    }
    console.log(colors);
  }

  function selected(arr, params) {
    if (arr.includes(params)) return "text-[red]";
  }

  const productID = useParams();
  // console.log(productID);

  const productQuery = useQuery("getProduct", getProduct);

  let product;
  if (productQuery.data && productQuery.data.status) {
    product = productQuery.data.body;
  }

  // console.log(productQuery.data);

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

  // console.log({ item });

  return (
    <Layout>
      <CategoryNav>
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="px-[6rem] py-[4rem] ">
        <DetailsCard>
          <DetailsCard.NavOutline>Women {">"} Full set</DetailsCard.NavOutline>
          <div className=" grid grid-cols-2 gap-[8rem] mb-[10rem]">
            <DetailsCard.Image>
              <HeroCarousel styles="mb-[2rem]">
                <HeroCarousel.Slides>
                  {item.allImages.map((image) => (
                    <SwiperSlide>
                      <img
                        alt={image.originalname}
                        className={"carouselImg rounded-[5rem]"}
                        width="100%"
                        src={image.url}
                      />
                    </SwiperSlide>
                  ))}
                </HeroCarousel.Slides>
              </HeroCarousel>
            </DetailsCard.Image>
            <div>
              <DetailsCard.Name>{item.name}</DetailsCard.Name>
              <DetailsCard.Price>N {item.price}</DetailsCard.Price>
              <DetailsCard.Description>
                {item.description}
              </DetailsCard.Description>
              <DetailsCard.Size>
                <div className="flex">
                  {sizesFromDb.map((cur) => (
                    <div
                      onClick={() => handleSize(cur)}
                      className={`p-[1.5rem] rounded-[1rem] border-[0.2rem] inline ${selected(
                        sizes,
                        cur
                      )}`}
                    >
                      {cur}
                    </div>
                  ))}
                  {/* <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline active:text-[red]">
                    sm
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    lg
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    xl
                  </div> */}
                </div>
              </DetailsCard.Size>
              <DetailsCard.Color>
                <div className="flex">
                  {colorsFromDb.map((cur) => (
                    <div
                      onClick={() => handleColor(cur)}
                      className={`p-[1.5rem] rounded-[1rem] border-[0.2rem] inline active:text-[red] ${selected(
                        colors,
                        cur
                      )}`}
                    >
                      {cur}
                    </div>
                  ))}
                  {/* <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline text-[red]">
                    red
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    blue
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    yellow
                  </div> */}
                </div>
              </DetailsCard.Color>
              <DetailsCard.Set>
                <div className="flex">
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline active:text-[red]">
                    full set
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    crop top
                  </div>
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    leggings
                  </div>
                </div>
              </DetailsCard.Set>
            </div>
          </div>
        </DetailsCard>
        <div className="similar-container mb-[12rem]">
          <div className="text-[2rem] font-bold underline underline-offset-2 mb-[2.3rem]">
            You may like
          </div>
          <div className="flex flex-wrap mx-[-1.4%] ">
            {productQuery.data &&
              product.map((product) => (
                <ProductCard key={product._id}>
                  <ProductCard.Image>
                    {product.displayImage.url}
                  </ProductCard.Image>
                  <ProductCard.Name>{product.name}</ProductCard.Name>
                  <ProductCard.Price>N {product.price}</ProductCard.Price>
                </ProductCard>
              ))}
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
