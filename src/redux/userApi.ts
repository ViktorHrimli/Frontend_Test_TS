import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUsers } from "../types/users";

const usersApi = createApi({
  reducerPath: "users",
  //
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1",
  }),
  //
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUsers, number>({
      query: (page = 1) => ({
        url: "/users",
        params: {
          count: 6,
          page,
        },
      }),
    }),
  }),
});
// page=1&count=5
export { usersApi };
