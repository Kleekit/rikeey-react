import React from "react";
import { Link } from "react-router-dom";

export default function ShopItem(props) {
  return (
    <Link to={props.link} className={props.className}>
      <div className="shopItemImg">
        <img className=" w-100 h-100" src={props.imgSrc} alt="" />
      </div>
      <div className="shop-col-text">
        <p className="fw-700">{props.name}</p>
        <p># {props.price} / $ 17</p>
        {props.colors}
        {/* <FaCircle /> */}
      </div>
    </Link>
  );
}
