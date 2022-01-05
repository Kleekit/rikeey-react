import React from "react";

export default function ProductCard({ children }) {
  return (
    <div className="productContainer flex flex-col justify-center px-[1.4%] w-1/2 sm:w-1/4 my-5">
      <div className="productImg ">
        <img
          className="w-full rounded-[2rem] h-[55vh] "
          src="https://randomuser.me/api/portraits/women/82.jpg"
          alt="product figure"
        />
      </div>
      <div className="productNameContainer px-2">{children}</div>
    </div>
  );
}

ProductCard.Name = (props) => <p className="my-3 text-3xl">{props.children}</p>;

ProductCard.Price = (props) => (
  <p className="my-3 font-bold text-3xl">{props.children}</p>
);
