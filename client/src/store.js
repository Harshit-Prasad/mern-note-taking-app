import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/api-slice/apiSlice";
import authentication from "./slices/authentication-slice/authentication";
import search from "./slices/search-slice/search";

const store = configureStore({
  reducer: {
    authentication,
    search,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export default store;
