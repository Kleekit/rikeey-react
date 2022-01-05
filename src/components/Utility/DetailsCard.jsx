import React from "react";

export default function DetailsCard(props) {
  return (
    <div>
      {props.children}
      <div className=" grid grid-cols-2 gap-[8rem] mb-[10rem]">
        <div className="">
          <div className="productDetailsImg w-full">
            <img
              className="img-fluid w-full rounded-[1.5rem] "
              src="https://randomuser.me/api/portraits/women/82.jpg"
              alt="product"
            />
          </div>
        </div>
        <div className="">{props.children}</div>
      </div>
    </div>
  );
}

DetailsCard.NavOutline = (props) => (
  <h6 className="mb-[3rem] text-[1.8rem] font-[600]">Women {">"} Full set</h6>
);

DetailsCard.Name = (props) => (
  <div className="detailsHeader">
    <h2>Motion Seamless Crop - Musk Pink</h2>
  </div>
);

DetailsCard.Price = (props) => (
  <div className="detailsPrice">
    <h6>15,000</h6>
  </div>
);

DetailsCard.Description = (props) => (
  <div className="detailsDescription">
    <h6>Description</h6>
    <p>
      The Kendal set is a collection as vibrant as you are; a collection that
      empowers you to let yourself glow. With performance and vibrance equally
      at the fore of design. It features a cross body top, impact sport bra and
      a leggings.
    </p>
  </div>
);

DetailsCard.Size = (props) => (
  <div className="productSize">
    <h6>Select Size</h6>
  </div>
);

DetailsCard.Color = (props) => (
  <div className="productColor">
    <h6>Select Color</h6>
  </div>
);

DetailsCard.Set = (props) => (
  <div className="productSet">
    <h6>Select Set</h6>
  </div>
);
