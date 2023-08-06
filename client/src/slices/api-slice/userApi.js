import { apiSlice } from "./apiSlice";
const USER_URL = "/api/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    // logout: builder.mutation({
    //   query: () => ({
    //     url: `${USER_URL}/logout`,
    //     method: "POST",
    //   }),
    // }),

    // updateUser: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/profile`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  // useLogoutMutation,
  //   useUpdateUserMutation,
} = userApiSlice;
