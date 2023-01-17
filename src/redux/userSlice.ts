import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: false,
};

const usersSlice = createSlice({
  name: "smalSlice",
  initialState,
  reducers: {
    succsesPage(state, actions) {
      state.flag = actions.payload;
    },
  },
});

export const { succsesPage } = usersSlice.actions;
export const sliceReducer = usersSlice.reducer;
