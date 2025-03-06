import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Stores which demo is visible
};

const useMemoSlice = createSlice({
  name: "useMemo",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useMemoSlice.actions;
export default useMemoSlice.reducer;
