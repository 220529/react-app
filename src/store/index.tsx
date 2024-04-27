import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // 默认使用 localStorage

import userReducer from "./userSlice";
import counterReducer from "./counterSlice";
import editorReducer from "./editorSlice";

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  editor: editorReducer,
});

// 定义持久化配置
const persistConfig = {
  key: "root", // 用于存储的键
  storage, // 使用的存储引擎，默认是 localStorage
  whitelist: ["user"], // 只持久化 userReducer
};

// 创建持久化的 rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 使用 configureStore 创建 store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 创建一个持久化的 store 版本
export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
