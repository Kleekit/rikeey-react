import { apiCaller } from "../apiCaller/apicaller";

// import apiCaller from "../../../rikeey-admin/src/api/apiCaller";

// import apiCaller from "../../..//src/api/apiCaller";

//mutable

export const getProduct = async (body) => {
  let { data } = await apiCaller.get("/products");
  return data;
};

// export const loginUser = async (body) => {
//   let { data } = await apiCaller.post("/user/login", body);
//   console.log({ data });
//   return data;
// };
