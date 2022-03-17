import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
  initialState: {
    items: [],
    count: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.count += 1;
      state.items.push(action.payload);
      state.total += 5;
    },
  },
});

export const { addItem } = templateSlice.actions;
export default templateSlice.reducer;
