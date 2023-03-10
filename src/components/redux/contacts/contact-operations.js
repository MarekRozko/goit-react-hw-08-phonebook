import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/contacts";
import { toast } from 'react-toastify';


export const fetchAllContact = createAsyncThunk(
    "contacts/fetchAll",
    async(_, rejectWithValue) => {
        try {
            const data = await api.getAllContact();
            return data;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
)

export const fetchAddContact = createAsyncThunk(
    "contacts/addContact",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: ({name, phone}, {getState}) => {
            const {contacts} = getState();
           
        const normalizedName = name.toLowerCase()?.trim();
        const normalizedNumber = phone.toString()?.trim();
        const result = contacts.items.find(({ name, number}) => {
            return (name.toLowerCase() === normalizedName || number === normalizedNumber);
        })
        if(result){
                toast.info('The contact already exists, please add a new contact', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                return false;
            }
        }
    }
)

export const fetchDeleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, {thunkAPI}) => {
        try {
            await api.deleteContact(id);
            return id;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)