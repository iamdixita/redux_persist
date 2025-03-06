import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleDemo: null, // Stores which demo is visible
};

const useEffectSlice = createSlice({
  name: "useEffect",
  initialState,
  reducers: {
    setVisibleDemo: (state, action) => {
      state.visibleDemo = action.payload;
    },
  },
});

export const { setVisibleDemo } = useEffectSlice.actions;
export default useEffectSlice.reducer;
