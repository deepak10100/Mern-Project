// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes:["Todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: `all-todo`,
        method: 'GET',
      }),
      providesTags: ["Todo"]
    }),
    getSingleTodo: builder.query({
      query: (id) => ({
        url: `single-todo/${id}`,
        method: 'GET',
      }),
      providesTags: ["Todo"]
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        method: 'POST',
        body,
      }),
      invalidatesTags: ["Todo"]
    }),
    editTodo: builder.mutation({
      query: ({id,...body}) => ({
        url: `edit-todo/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ["Todo"]
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `delete-todo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Todo"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodoQuery,useDeleteTodoMutation, useCreateTodoMutation, useEditTodoMutation, useGetSingleTodoQuery } = todoApi