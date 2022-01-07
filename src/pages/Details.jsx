import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import CategoryNav from "../components/Utility/CategoryNav";
import Layout from "../components/Utility/Layout";
import ProductCard from "../components/Utility/ProductCard";
import DetailsCard from "../components/Utility/DetailsCard";
import { getProduct, getProductDetails } from "../methods/product.method";
import { useParams } from "react-router-dom";
import Carousel from "../components/Utility/Carousel";
import { SwiperSlide } from "swiper/react";
import { addItemToCart } from "../methods/cart.method";
import { getOrStoreId } from "../helpers/getOrStore.helper";

export default function Details() {
  const [sizes, setSize] = useState(Array);
  const [colors, setColor] = useState(Array);
  const cartItem = useMutation((item) => addItemToCart(item));

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

  const handleAddToCart = async () => {
    const payload = {
      productId: item._id,
      productName: item.name,
      price: item.price,
      sharedPreference: getOrStoreId(),
    };
    console.log(payload);
    await cartItem.mutateAsync(payload);
    // if (res.status) {
    //   window.location.reload();
    // }
  };

  const productID = useParams();

  const productQuery = useQuery("getProduct", getProduct);

  let products;
  if (productQuery.data && productQuery.data.status) {
    products = productQuery.data.body;
  }

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

  console.log({ item });

  return (
    <Layout>
      <CategoryNav styles="hidden md:flex">
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Tees</div>
      </CategoryNav>
      <div className="px-[3rem] sm:px-[6rem] py-[2rem] sm:py-[4rem] ">
        <DetailsCard>
          <DetailsCard.NavOutline>Women {">"} Full set</DetailsCard.NavOutline>
          <div className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-[8rem] mb-[10rem]">
            <DetailsCard.Image>
              <Carousel delay={4500} styles="mb-[2rem]">
                <Carousel.Slides>
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
                </Carousel.Slides>
              </Carousel>
            </DetailsCard.Image>
            <div>
              <DetailsCard.Name>{item.name}</DetailsCard.Name>
              <DetailsCard.Price>N {item.price}</DetailsCard.Price>
              <DetailsCard.Description>
                {item.description}
              </DetailsCard.Description>
              {item.sizes.length > 0 && (
                <DetailsCard.Size>
                <div className="flex">
                  {item.sizes.map((cur) => (
                    <div
                      onClick={() => handleSize(cur)}
                      className={`p-[1.5rem] rounded-[1rem] border-[0.2rem] inline cursor-pointer active:text-[red] ${selected(
                        sizes,
                        cur
                      )}`}
                    >
                      {cur}
                    </div>
                  ))}
                </div>
              </DetailsCard.Size>
              )}
              {item.colors.length > 0 && (
                 <DetailsCard.Color>
                 <div className="flex">
                   {item.colors.map((cur) => (
                     <div
                       onClick={() => handleColor(cur)}
                       className={`p-[1.5rem] rounded-[1rem] border-[0.2rem] inline cursor-pointer active:text-[red] ${selected(
                         colors,
                         cur
                       )}`}
                     >
                       {cur}
                     </div>
                   ))}
                 </div>
               </DetailsCard.Color>
              )}
             
              <DetailsCard.Set>
                <div className="flex">
                  <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline cursor-pointer active:text-[red]">
                    Full Set
                  </div>
                  {item.subsets.map((subset) => {
                    return (
                      <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                      {subset.name}
                    </div>
                    )
                  })}
                 
                  {/* <div className="p-[1.5rem] rounded-[1rem] border-[0.2rem] inline">
                    leggings
                  </div> */}
                </div>
              </DetailsCard.Set>
              <div>
                <button onClick={handleAddToCart}>Add to cart</button>
              </div>
            </div>
          </div>
        </DetailsCard>
        <div className="similar-container mb-[12rem]">
          <div className="text-[2rem] font-bold underline underline-offset-2 mb-[2.3rem]">
            You may like
          </div>
          <div className="hidden sm:flex flex-wrap sm:mx-[-3%] md:mx-[-1.4%] ">
            {productQuery.data &&
              products.map((product) => (
                <ProductCard
                  styles="sm:px-[3%] md:px-[1.4%] sm:w-1/3 md:w-1/4 mb-[5rem] sm:mb-[8rem]"
                  link={`/details/${product._id}`}
                  key={product._id}
                >
                  <ProductCard.Image>
                    {product.displayImage.url}
                  </ProductCard.Image>
                  <ProductCard.Name>{product.name}</ProductCard.Name>
                  <ProductCard.Price>N {product.price}</ProductCard.Price>
                </ProductCard>
              ))}
          </div>
          <Carousel delay={4500} styles="mb-[2rem] block sm:hidden">
            <Carousel.Slides>
              {productQuery.data &&
                products.map((product) => (
                  <SwiperSlide key={product._id}>
                    <ProductCard
                      styles="pb-[4rem]"
                      link={`/details/${product._id}`}
                    >
                      <ProductCard.Image>
                        {product.displayImage.url}
                      </ProductCard.Image>
                      <ProductCard.Name>{product.name}</ProductCard.Name>
                      <ProductCard.Price>N {product.price}</ProductCard.Price>
                    </ProductCard>
                  </SwiperSlide>
                ))}
            </Carousel.Slides>
          </Carousel>
        </div>
        <div className="border-b-[0.15rem] border-[#848688] mx-auto w-full sm:w-[75%] mb-[10rem]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8rem] mb-[12rem]">
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
