import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./Auth/auth-slice";
import contactReducer from "./contacts/contact-slice";
import filterReducer from "./filter/filter-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contact: contactReducer,
    filter: filterReducer,
})


export default rootReducer;