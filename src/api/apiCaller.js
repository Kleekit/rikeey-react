import axios from "axios";
import auth from "../services/authService";
import { config } from "./config";

// const config = {};
// config;
const apiCaller = axios.create({
  baseURL: config.baseUrl,
  //   timeout: 1000,
  headers: { Authorization: config.authHeader.josh },
});

// const apiCaller = {};
// apiCaller.post = async (api, body) => {
//   const response = await request.post(api, body);
//   // token = response.headers.authorization;
//   // let token = response.headers.authorization;
//   // if (token) {
//   //   localStorage.setItem("AUTH_KT", token);
//   // }
//   return response.data;
// };
// apiCaller.get = async (api, body) => {
//   // let token = localStorage.getItem("AUTH_KT");
//   // console.log("token before ");
//   // console.log({ token });
//   // if (token) {
//   //   request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   // }

//   const response = await request.get(api);
//   // token = response.headers.authorization;
//   // localStorage.setItem("AUTH_KT", token);
//   // console.log(response.defaults.headers);
//   // console.log(response.data);
//   // console.log({ data });
//   return response.data;
// };

export default apiCaller;
// export default apiFileCaller;
