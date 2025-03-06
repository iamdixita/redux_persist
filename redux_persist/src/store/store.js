import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage

import useStateSlice from "./slice/useStateSlice.js";
import useEffectSlice from "./slice/useEffectSlice.js";
import useReducerSlice from "./slice/useReducerSlice.js";
import useMemoSlice from "./slice/useMemoSlice.js";
import useCallbackSlice from "./slice/useCallbackSlice.js";
import useRefSlice from "./slice/useRefSlice.js";

// Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["useState", "useEffect", "useReducer", "useMemo", "useCallback", "useRef"], // Persist specific slices
};

// Root Reducer
const rootReducer = combineReducers({
  useState: useStateSlice,
  useEffect: useEffectSlice,
  useReducer: useReducerSlice,
  useMemo: useMemoSlice,
  useCallback: useCallbackSlice,
  useRef: useRefSlice,
});

// Apply Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

export const persistor = persistStore(store);
