import React from "react";

export default function AccessoriesCard() {
  return (
    <div className=" flex flex-col justify-center align-center relative my-[1.2rem] ">
      <div className=" w-full">
        <img
          className="img-fluid w-full rounded-[7rem] "
          src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="accessories"
        />
      </div>
      <div className=" absolute bottom-[20%] w-full text-center">
        <h1 className="text-white text-[6rem] font-bold mb-[3rem] ">
          Accessories
        </h1>
        <a
          href="/shop"
          className="inline text-[2rem] p-[1.5rem] rounded-[3rem] cursor-pointer font-bold bg-white"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
