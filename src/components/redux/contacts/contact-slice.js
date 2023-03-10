import {createSlice} from "@reduxjs/toolkit";
import { fetchAllContact, fetchAddContact, fetchDeleteContact } from "./contact-operations";
const initialState = {
    contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContact.pending, (store) => {
                store.isloading = true;
            })
            .addCase(fetchAllContact.fulfilled, (store, { payload }) => {
                store.isloading = false;
                store.items = payload;
            })
            .addCase(fetchAllContact.rejected, (store, { payload }) => {
                store.isloading = false;
                store.error = payload;
            })
            .addCase(fetchAddContact.pending, (store) => {
                store.isloading = true;
            })
            .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
                store.isloading = false;
                store.items?.push(payload);
            })
            .addCase(fetchAddContact.rejected, (store, { payload }) => {
                store.isloading = false;
                store.error = payload;
            })
            .addCase(fetchDeleteContact.pending, (store) => {
                store.isloading = true;
            })
            .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
                store.isloading = false;
                const index = store.items.findIndex(item => item.id === payload);
                store.items.splice(index, 1);
            })
            .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
                store.isloading = false;
                store.error = payload;
            })
    }
})

export default contactsSlice.reducer;