
import axios from "axios";

const contactInstance = axios.create({
    baseURL: "https://63fb53392027a45d8d645ca6.mockapi.io/api/contacts"
})

export const getAllContact = async()=> {
    const {data} = await contactInstance.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await contactInstance.post("/", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await contactInstance.delete(`/${id}`);
    return data;
}