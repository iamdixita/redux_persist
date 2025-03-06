import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Stores which demo is visible
};

const useReducerSlice = createSlice({
  name: "useReducer",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useReducerSlice.actions;
export default useReducerSlice.reducer;
