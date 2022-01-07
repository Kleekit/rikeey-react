import React from "react";
import Layout from "../components/Utility/Layout";
import Carousel from "../components/Utility/Carousel";
// import ProductCard from "../components/Utility/ProductCard";
import AccessoriesCard from "../components/Utility/AccessoriesCard";
import { useQuery } from "react-query";
import { getProduct } from "../methods/product.method";
import { SwiperSlide } from "swiper/react";
// import CardNFloatedText from "../components/Utility/CardNFloatedText";

const carouselImg = [
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "",
  },
];

function LandingPage() {
  const customConfig = {
    // customStyle: `${classes.root}`,
  };

  const { data } = useQuery("getProduct", getProduct);

  console.log(data);

  return (
    <Layout {...customConfig}>
      <Carousel delay={3000} styles="mb-[2rem]">
        <Carousel.Slides>
          {carouselImg.map((item, itemIdx) => (
            <SwiperSlide key={itemIdx}>
              <div className="h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] w-[100vw]">
                <img alt={item.alt} width="100%" src={item.src} />
              </div>
            </SwiperSlide>
          ))}
        </Carousel.Slides>
      </Carousel>
      <div className="p-[3rem] sm:p-[6rem]">
        <div className="text-center mb-[12rem]">
          <div className="text-[5rem] font-bold mb-[1rem] xs:text-[3rem]">
            Sweat in Style
          </div>
          <div className="text-[2rem] font-[500] mb-[3.5rem] xs:text-[1.8rem]">
            Made for your comfort
          </div>
          <a
            href="/shop"
            className="inline xs:text-[1.5rem] text-[2rem] p-[1.5rem] rounded-[3rem] cursor-pointer font-bold bg-[#FEB9BA]"
          >
            Shop Now
          </a>
        </div>
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
        {/* <div className="new-release-container mb-[12rem]">
          <div className="text-[2rem] font-bold underline underline-offset-2 mb-[2.3rem]">
            New Release
          </div>
          <div className="hidden sm:flex flex-wrap sm:mx-[-3%] md:mx-[-1.4%] ">
            {data &&
              data.body.map((product) => (
                <ProductCard
                  styles="sm:px-[3%] md:px-[1.4%] sm:w-1/3 md:w-1/4"
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
              {data &&
                data.body.map((product) => (
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
        </div> */}
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

export default LandingPage;
