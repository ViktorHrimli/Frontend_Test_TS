import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export { store };
