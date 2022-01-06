import React from "react";

export default function ShopHero(props) {
  return (
    <div
      className={`${props.styles} text-center w-3/4 sm:w-2/5 mx-auto mb-[6rem]`}
    >
      {props.children}
    </div>
  );
}

ShopHero.Name = (props) => (
  <div className="xs:text-[3rem] text-[3.8rem] font-[700] mb-[2rem]">
    {props.children}
  </div>
);
ShopHero.Description = (props) => (
  <div className="xs:text-[1.7rem] text-[2.5rem] font-[400] ">
    {props.children}
  </div>
);
ShopHero.Toggle = (props) => (
  <div className="text-[1.6rem] font-[600] mt-[4rem]">{props.children}</div>
);
