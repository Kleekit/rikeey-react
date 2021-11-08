import React from "react";
import { Link } from "react-router-dom";

export default function ShopItem(props) {
  return (
    <Link to={props.link} className={props.className}>
      <div className="shopItemImg">
        <img className=" w-100 h-100" src={props.imgSrc} alt="" />
      </div>
      <div className="shop-col-text">
        <p className="fw-700">{props.title}</p>
        <p># {props.price} / $ 17</p>
        <p className="fs-sm mb-m8">Available in 3 colors</p>
        {/* <FaCircle /> */}
      </div>
    </Link>
  );
}
