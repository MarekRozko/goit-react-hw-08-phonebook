import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './Auth/auth-slice';
import contactsReducer from './contacts/contact-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});