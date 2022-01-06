import React from "react";

export default function CategoryNav(props) {
  return (
    <div
      className={`${props.styles} h-[4.5rem] text-[1.4rem] items-center justify-center font-[600]`}
    >
      <div className="flex justify-between w-[50%] sm:w-[25%]">
        {props.children}
      </div>
    </div>
  );
}
