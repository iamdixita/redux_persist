import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Stores which demo is visible
};

const useRefSlice = createSlice({
  name: "useRef",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useRefSlice.actions;
export default useRefSlice.reducer;
