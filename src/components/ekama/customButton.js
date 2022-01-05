import React from "react";

const CustomButton = ({
  text = "string",
  onclick = () => alert("not implemented"),
}) => {
  return (
    <button className="button-style" onclick={onclick}>
      {text}
    </button>
  );
};

export default CustomButton;
