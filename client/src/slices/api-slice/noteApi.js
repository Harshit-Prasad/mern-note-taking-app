import { apiSlice } from "./apiSlice";
const NOTE_URL = "/api/note";

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: `${NOTE_URL}`,
        method: "GET",
      }),
      providesTags: ["Notes"],
    }),

    createNote: builder.mutation({
      query: (data) => ({
        url: `${NOTE_URL}/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),

    getNote: builder.query({
      query: (id) => ({
        url: `${NOTE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Note"],
    }),

    updateNote: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `${NOTE_URL}/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Notes", "Note"],
    }),

    deleteNote: builder.mutation({
      query: (id) => ({
        url: `${NOTE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes", "Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useCreateNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteApiSlice;
