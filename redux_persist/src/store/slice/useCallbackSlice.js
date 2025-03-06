import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Stores which demo is visible
};

const useCallbackSlice = createSlice({
  name: "useCallback",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useCallbackSlice.actions;
export default useCallbackSlice.reducer;
