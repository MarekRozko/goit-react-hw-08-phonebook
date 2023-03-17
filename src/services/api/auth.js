import { instance } from "../api/instance";
import { setToken } from "../api/instance";

export const signup = async (data) => {
    const {data: result} = await instance.post("/users/signup", data);
    setToken(result.token);
    return result;
}

export const login = async (data) => {
    const {data: result} = await instance.post("/users/login", data);
    setToken(result.token);
    return result;
}

export const current = async (token) => {
  try {
    setToken(token);
    const response = await instance.get("/users/current");
    return response.data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async()=> {
    const {data} = await instance.post("/users/logout");
    setToken();
    return data;
}

export default instance;