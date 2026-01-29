import axios from "axios";

export const http = axios.create({
  baseURL: "https://billing-api.xyz/api",
  timeout: 15000,
});