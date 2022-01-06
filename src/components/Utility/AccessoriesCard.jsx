import React from "react";

export default function AccessoriesCard({ src, accessName, style, link }) {
  return (
    <div className=" flex flex-col justify-center align-center relative my-[1.2rem] ">
      <div className=" w-full">
        <img
          className="img-fluid w-full rounded-[7rem] "
          src={src}
          style={style}
          alt="accessories"
        />
      </div>
      <div className=" absolute bottom-[20%] w-full text-center">
        <h1 className="text-white text-[6rem] font-bold mb-[3rem] ">
          {accessName}
        </h1>
        <a
          href={link}
          className="inline text-[2rem] px-[2.5rem] py-[1rem] rounded-[3rem] cursor-pointer font-bold bg-white"
        >
          Shop
        </a>
      </div>
    </div>
  );
}
