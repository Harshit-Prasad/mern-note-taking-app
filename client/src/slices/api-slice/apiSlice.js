import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
  prepareHeaders(headers, { getState }) {
    const { token } = getState().authentication.userInformation;

    if (token) headers.set("Authorization", `Bearer ${token}`);
    headers.set("Content-type", "application/json");

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
