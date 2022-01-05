import React from "react";

export default function DetailsCard(props) {
  return (
    <div>
      <div className="">{props.children}</div>
    </div>
  );
}

DetailsCard.NavOutline = (props) => (
  <h6 className="mb-[3rem] text-[1.8rem] font-[600]">{props.children}</h6>
);

DetailsCard.Image = (props) => (
  <div className="productDetailsImg w-full">{props.children}</div>
);

DetailsCard.Name = (props) => (
  <div className="detailsHeader">
    <h2>{props.children}</h2>
  </div>
);

DetailsCard.Price = (props) => (
  <div className="detailsPrice">
    <h6>{props.children}</h6>
  </div>
);

DetailsCard.Description = (props) => (
  <div className="detailsDescription">
    <h6 className="text-[2rem] font-[700] mb-[1.5rem]">Description</h6>
    <p>{props.children}</p>
  </div>
);

DetailsCard.Size = (props) => (
  <div className="productSize mb-[3rem]">
    <h6 className="text-[2rem] font-[700] mb-[1.5rem]">Size</h6>
    <div>{props.children}</div>
  </div>
);

DetailsCard.Color = (props) => (
  <div className="productColor mb-[3rem]">
    <h6 className="text-[2rem] font-[700] mb-[1.5rem]">Color</h6>
    <div>{props.children}</div>
  </div>
);

DetailsCard.Set = (props) => (
  <div className="productSet mb-[3rem]">
    <h6 className="text-[2rem] font-[700] mb-[1.5rem]">Set</h6>
    <div>{props.children}</div>
  </div>
);
