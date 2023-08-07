import { apiSlice } from "./apiSlice";
const NOTE_URL = "/api/note";

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    notes: builder.query({
      query: () => ({
        url: `${NOTE_URL}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useNotesQuery } = noteApiSlice;
