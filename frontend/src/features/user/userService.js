import axios from "axios";

const USER_API_URL = "/user";

const login = async (branchData) => {
  const response = await axios.post(`${USER_API_URL}/login`,
    {
        // body: JSON.stringify({email,password}),
        headers: {
           authorization: JSON.parse(localStorage.getItem("token"))
        },
      }
  );
  console.log(response);
  // return response.data;
};

const userService = { login };

export default userService;
