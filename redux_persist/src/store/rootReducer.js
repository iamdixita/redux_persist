import { combineReducers } from "@reduxjs/toolkit";
import useStateSlice from "./useStateSlice";
import useEffectSlice from "./useEffectSlice";
import useReducerSlice from "./useReducerSlice";
import useMemoSlice from "./useMemoSlice";
import useCallbackSlice from "./useCallbackSlice";
import useRefSlice from "./useRefSlice";

const rootReducer = combineReducers({
  useState: useStateSlice,
  useEffect: useEffectSlice,
  useReducer: useReducerSlice,
  useMemo: useMemoSlice,
  useCallback: useCallbackSlice,
  useRef: useRefSlice,
});

export default rootReducer;
