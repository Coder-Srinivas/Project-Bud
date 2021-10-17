import axiosInstance from "../utils/axiosInstance";

const login = async () => {
  return await axiosInstance.post("login").then((response) => {
    return response.data;
  });
};

export { login };
