import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="productContainer flex flex-col justify-center px-[1.4%] w-1/2 sm:w-1/4">
      <Link to={props.link} className="productNameContainer">
        {props.children}
      </Link>
    </div>
  );
}

ProductCard.Image = (props) => (
  <div className="productImg mb-[1rem]">
    <img
      className="w-full rounded-[2rem] h-[55vh] "
      src={props.children}
      alt="product figure"
    />
  </div>
);

ProductCard.Name = (props) => (
  <p className="text-[2.3rem] font-[400] mb-[0.5rem] px-2">{props.children}</p>
);

ProductCard.Price = (props) => (
  <p className="text-[1.8rem] font-[600] px-2">{props.children}</p>
);
