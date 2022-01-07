import React from "react";

export default function AccessoriesCard({ src, accessName, style, link }) {
  return (
    <div className=" flex flex-col justify-center align-center relative my-[1.2rem] ">
      <div className="overflow-hidden h-[60vh] md:h-[80vh] lg:h-[100vh] rounded-[7rem] w-full">
        <img
          className="img-fluid object-cover"
          src={src}
          style={style}
          alt="accessories"
        />
      </div>
      <div className=" absolute bottom-[20%] w-full text-center">
        <h1 className=" xs:text-4xl text-white text-[6rem] font-bold mb-[3rem] ">
          {accessName}
        </h1>
        <a
          href={link}
          className="inline xs:text-[1.2rem] text-[2rem] xs:px-[1.5rem] xs:py-[0.5rem] px-[2.5rem] py-[1rem] rounded-[3rem] cursor-pointer font-bold bg-white"
        >
          Shop
        </a>
      </div>
    </div>
  );
}
