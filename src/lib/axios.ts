import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL: "https://e-commerce-api-j7to.onrender.com",
});

export const axiosPublic = axios.create({
  baseURL: "https://e-commerce-api-j7to.onrender.com",
  withCredentials: true,
});
