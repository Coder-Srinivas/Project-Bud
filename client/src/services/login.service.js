import axiosInstance from "../utils/axiosInstance";

const login = async (user) => {
  console.log(user);
  return await axiosInstance
    .post("login", {
      user,
    })
    .then((response) => {
      return response.data;
    });
};

export { login };
