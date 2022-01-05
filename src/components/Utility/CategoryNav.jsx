import React from "react";

export default function CategoryNav(props) {
  return (
    <div
      className={`${props.styles} h-[5.5rem] text-[1.6rem] items-center justify-center font-[600] border-b-[0.15rem] border-[#5E6368]`}
    >
      <div className="flex justify-between w-[50%] sm:w-[25%]">
        {props.children}
      </div>
    </div>
  );
}
