import { apiCaller } from "../apiCaller/apicaller";
import { getOrStoreId } from "../helpers/getOrStore.helper";

// const addItemToCart
export const addItemToCart = async (body) => {
  let { data } = await apiCaller.post("/item", body);
  console.log({ data });
  return data;
};

export const getCartItem = async (body) => {
  let { data } = await apiCaller.get(`/item/${getOrStoreId()}`);
  return data;
};

export const removeItemFormCart = async (body) => {
  console.log({ body });

  let { data } = await apiCaller.put("/item", body);
  console.log({ data });
  return data;
};

// user///
export const getUser = async function () {
  const userId = getOrStoreId();
  console.log(userId);
  let { data } = await apiCaller.get(`/user/${userId}`);
  return data;
};
export const register = async function (body) {
  let { data } = await apiCaller.post("/user", body);
  console.log({ data });
  return data;
};

///transaction
export const prepareTransaction = async function (body) {
  let { data } = await apiCaller.post(`/transaction/paystack`, body);
  console.log({ data });
  return data;
};
export const createTransaction = async function (body) {
  console.log({ body });
  let { data } = await apiCaller.post(`/transaction/paystack`, body);
  console.log({ data });
  return data;
};
