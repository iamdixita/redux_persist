import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["useState", "useEffect", "useReducer", "useMemo", "useCallback", "useRef"],
};

export default persistConfig;
