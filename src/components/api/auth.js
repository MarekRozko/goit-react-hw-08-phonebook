import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

export const setToken = (token) => {
  instance.defaults.headers.authorization = token ? `Bearer ${token}` : "";
};

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

export const getCurrent = async (token) => {
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