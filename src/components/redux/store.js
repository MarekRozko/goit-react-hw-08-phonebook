import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"; 
import { persistStore,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';

import rootReducer from "./root-reducer";
import authReducer from "./Auth/auth-slice";

export const store = configureStore({
    reducer: {
        root: rootReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store);