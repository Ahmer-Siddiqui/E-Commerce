import axios from "axios";

const USER_API_URL = "/user";

const login = async (userData) => {
  const response = await axios.post(`${USER_API_URL}/login`, userData);
  return response.data;
};
const register = async (userData) => {
  const response = await axios.post(`${USER_API_URL}/login`, userData);
  return response.data;
};

const userService = { login, register };

export default userService;
