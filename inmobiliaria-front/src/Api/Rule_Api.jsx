import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  //baseURL:process.env.REACT_APP_URL,
   //baseURL:import.meta.env.VITE_URL_BACK,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default API;
