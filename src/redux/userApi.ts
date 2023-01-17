import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUsers, Token, Position } from "../types/users";

const usersApi = createApi({
  reducerPath: "users",
  //
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1",
  }),

  //
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getAllUsers: build.query<IUsers, number>({
      query: (page = 1) => ({
        url: "/users",
        params: {
          page: page,
          count: 6,
        },
      }),
      providesTags: () => ["Post"],
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
    getToken: build.query<Token, string>({
      query: () => ({
        url: "/token",
      }),
    }),
    getPosition: build.query<Position, string>({
      query: () => ({
        url: "/positions",
      }),
    }),
    postNewUser: build.mutation({
      query: ({ newUser, token }) => ({
        url: "/users",
        method: "POST",
        body: newUser,
        headers: {
          Token: token,
        },
      }),
      invalidatesTags: () => ["Post"],
    }),
  }),
});

export { usersApi };
