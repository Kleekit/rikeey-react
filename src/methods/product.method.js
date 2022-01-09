import { apiCaller } from "../apiCaller/apicaller";

// import apiCaller from "../../../rikeey-admin/src/api/apiCaller";

// import apiCaller from "../../..//src/api/apiCaller";

//mutable

export const getProduct = async () => {
  let { data } = await apiCaller.get("/products");
  console.log(data);
  return data;
};

export const getProductDetails = async ({ queryKey }) => {
  const productId = queryKey[1].productId;
  let { data } = await apiCaller.get(`/product/${productId}`);
  // console.log(data);
  return data;
};

export const getCategory = async (body) => {
  let { data } = await apiCaller.get("/categories");

  return data;
};
