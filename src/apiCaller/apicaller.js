import axios from "axios";
import { config } from "./config";

export const apiCaller = axios.create({
  baseURL: config.baseurl,
  //   timeout: 1000,
  headers: { Authorization: config.authHeader },
});
