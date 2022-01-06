import React from "react";
import { useMutation } from "react-query";
import { changeQuantity, removeItemFormCart } from "../../methods/cart.method";

export default function SingleCartRow({ item, refetch }) {
  const { mutateAsync, isLoading } = useMutation((item) =>
    removeItemFormCart(item)
  );

  const handleRemoveItem = async () => {
    const payload = {
      cartItemId: item._id,
    };
    const res = await mutateAsync(payload);
    if (res.status) {
      refetch();
    }
  };

  return (
    // <div className="cartRowMain mb-[4rem]">
    //   <div className="row  grid grid-cols-2 gap-[8rem]">
    //     <div className="col-md-6 flex">
    //       <img
    //         className="img-fluid cartItemImg rounded-lg"
    //         src={item.productId.displayImage.url}
    //         alt="cart item"
    //       />
    //       <div>
    //         <h6 className="mx-3 font-bold">{item.productName}</h6>

    //         {/* <p className="mx-3 customItemText text-gray-500">Grey Crop Top</p> */}
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       {/* <div className="row grid grid-cols-3 gap-[8rem]">
    //         <div className="col-md-4">
    //           <h6 className="font-bold">₦15,000</h6>
    //         </div>
    //         <div className="col-md-4">
    //           <h6 className="w-1/2 flex items-center justify-between">
    //             <AiOutlineMinus /> 1 <AiOutlinePlus />
    //           </h6>
    //         </div> */}
    //       <div className="col-md-4 flex justify-between">
    //         <h6 className="font-bold">{item.price}</h6>
    //         <button className="removeBtn">
    //           <AiOutlineClose />
    //           <ChangeQuantity item={item} refetch={refetch} />
    //         </button>
    //       </div>
    //       <div className="col-md-4 flex justify-between">
    //         <h6>{item.price * item.quantity} total</h6>
    //         <button onClick={handleRemoveItem} className="removeBtn">
    //           X
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="cartRowMain mb-[4rem]">
      <div className="text-[1.8rem] grid grid-cols-6 gap-[2.5rem] md:gap-[4rem]">
        <div className="col-span-2 md:col-span-3 flex justify-between">
          <img
            className="img-fluid cartItemImg md:w-[35%] h-[22vh] md:h-[30vh] rounded-[2rem]"
            src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="cart item"
          />
          <div className="hidden md:block w-[60%] py-[3rem] items-center">
            <h6 className="mx-3 font-bold">name</h6>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 md:py-[3rem]">
          <div className="md:grid md:grid-cols-3 gap-[8rem] items-center ">
            <div className="block md:hidden order-1 mb-[1.2rem] pt-[1rem]">
              <h6 className="text-[2rem] font-bold">name</h6>
            </div>
            <div className="block md:hidden order-2 mb-[1.2rem]">Subset</div>
            <h6 className="hidden md:block order-3 md:order-none font-bold">
              4,000
            </h6>
            <div className="md:px-auto border mb-[2rem] md:mb-0 order-5 md:order-none border-[#332C2C] md:border-none flex w-fit px-[1rem] p-[0.5rem] rounded-lg md:block">
              <span className="fw-600 cartAddBtn">
                <span
                  // onClick={() => handleQuantity(item.quantity - 1)}
                  className="decreaseBtn cursor-pointer"
                  id="decrease"
                >
                  -
                </span>
                <span className="itemAmount mx-6">2</span>
                <span
                  // onClick={() => handleQuantity(item.quantity + 1)}
                  className="increaseBtn cursor-pointer"
                  id="increase"
                >
                  +
                </span>
              </span>
            </div>
            <div className="col-md-4 mb-[2rem] md:mb-0 font-bold flex justify-between order-5 md:order-none">
              <h6 className="">10,000</h6>
              <button className="removeBtn text-[2rem]">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChangeQuantity = ({ item, refetch }) => {
  const { mutateAsync, isLoading } = useMutation((item) =>
    changeQuantity(item)
  );

  const handleQuantity = async (num) => {
    if (num > 0) {
      await mutateAsync({ _id: item._id, quantity: num });
      // refetch
      refetch();
    }
  };

  console.log(item);

  return (
    <>
      {!isLoading && (
        <span className="fw-600 cartAddBtn">
          <span
            onClick={() => handleQuantity(item.quantity - 1)}
            className="decreaseBtn"
            id="decrease"
          >
            -
          </span>
          <span className="itemAmount ">{item.quantity}</span>
          <span
            onClick={() => handleQuantity(item.quantity + 1)}
            className="increaseBtn"
            id="increase"
          >
            +
          </span>
        </span>
      )}
    </>
  );
};
