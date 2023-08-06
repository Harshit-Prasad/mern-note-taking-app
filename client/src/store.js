import { configureStore } from "@reduxjs/toolkit";
import authentication from "./slices/authentication-slice/authentication";
import { apiSlice } from "./slices/api-slice/apiSlice";

const store = configureStore({
  reducer: {
    authentication,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export default store;
