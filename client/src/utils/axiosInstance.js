const axios = require("axios");

const url =
  process.env.NODE_ENV === "production"
    ? "https://project-bud.herokuapp.com/"
    : "http://localhost:5000/";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: url,
});

export default axiosInstance;
