import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterReducer from "./counterSlice";
import editorReducer from "./editorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    editor: editorReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
