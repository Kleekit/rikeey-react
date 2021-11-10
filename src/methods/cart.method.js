import { apiCaller } from "../apiCaller/apicaller";
import { getOrStoreId } from "../helpers/getOrStore.helper";

// const addItemToCart
export const addItemToCart = async (body) => {
  let { data } = await apiCaller.post("/item", body);

  return data;
};

export const getCartItem = async (body) => {
  let { data } = await apiCaller.get(`/item/${getOrStoreId()}`);

  return data;
};

export const removeItemFormCart = async (body) => {
  console.log(body);
  let { data } = await apiCaller.delete(`/item/${body.cartItemId}`);

  return data;
};
export const changeQuantity = async (body) => {
  console.log(body);
  let { data } = await apiCaller.put(`/item`, body);
  console.log(data);

  return data;
};

// user///
export const getUser = async function () {
  const userId = getOrStoreId();

  let { data } = await apiCaller.get(`/user/${userId}`);
  return data;
};
export const register = async function (body) {
  let { data } = await apiCaller.post("/user", body);

  return data;
};

///transaction
export const prepareTransaction = async function (body) {
  let { data } = await apiCaller.post(`/transaction/paystack`, body);

  return data;
};
export const createTransaction = async function (body) {
  let { data } = await apiCaller.post(`/transaction/paystack`, body);

  return data;
};
