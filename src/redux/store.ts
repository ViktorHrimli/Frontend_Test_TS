import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";
import { sliceReducer } from "./userSlice";

const rootReducer = combineReducers({
  succssesImg: sliceReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
