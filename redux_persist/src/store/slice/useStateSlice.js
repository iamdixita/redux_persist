import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Store the currently visible demo
};

const useStateSlice = createSlice({
  name: "useState",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useStateSlice.actions;
export default useStateSlice.reducer;
