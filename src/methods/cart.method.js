import { apiCaller } from "../apiCaller/apicaller";

// const addItemToCart
export const addItemToCart = async (body) => {
  let { data } = await apiCaller.post("/item", body);
  console.log({ data });
  return data;
};

export const getCartItem = async (body) => {
  let { data } = await apiCaller.get("/item");
  return data;
};

export const removeItemFormCart = async (body) => {
  console.log({ body });

  let { data } = await apiCaller.put("/item", body);
  console.log({ data });
  return data;
};
