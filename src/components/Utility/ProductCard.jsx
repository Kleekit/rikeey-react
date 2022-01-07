import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div
      className={`${props.styles} productContainer flex flex-col justify-center `}
    >
      <Link to={props.link} className="productNameContainer">
        {props.children}
      </Link>
    </div>
  );
}

ProductCard.Image = (props) => (
  <div className="productImg mb-[1rem]">
    <img
      className="w-full rounded-[2rem] h-[55vh] xs:h-[35vh]"
      src={props.children}
      alt="product figure"
    />
  </div>
);

ProductCard.Name = (props) => (
  <p className=" xs:text-[1.7rem] text-[2.3rem] font-[400] mb-[0.5rem] px-2">
    {props.children}
  </p>
);

ProductCard.Price = (props) => (
  <p className="xs:text-[1.6rem] text-[1.8rem] font-[600] px-2">
    {props.children}
  </p>
);
