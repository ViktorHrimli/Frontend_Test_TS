import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "smalSlice",
  initialState: false,
  reducers: {
    succsesPage(state, actions) {
      state = actions.payload;
    },
  },
});
