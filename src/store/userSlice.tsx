import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as user from "@/api/user";

// First, create the thunk
export const userLogin = createAsyncThunk("user/login", async (params: user.LoginProps) => {
  return await user.login(params);
});

export const userSignup = createAsyncThunk("user/signup", async (params: user.LoginProps) => {
  return await user.signup(params);
});

export const userInfo = createAsyncThunk("user/info", async () => {
  return await user.info();
});

interface UserState {
  userInfo: user.UserProps;
  loading: boolean;
  access_token: string;
}

const initialState: UserState = {
  userInfo: {},
  loading: false,
  access_token: "",
};

// Then, handle actions in your reducers:
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.includes("user/"),
      (state, action: any) => {
        if (action.meta.requestStatus === "pending") {
          state.loading = true;
        } else {
          state.loading = false;
          if (action.meta.requestStatus === "fulfilled" && action.payload) {
            if (action.type.includes("user/info")) {
              state.userInfo = action.payload;
            } else {
              state.access_token = action.payload.access_token;
            }
          }
        }
      }
    );
  },
});

export default userSlice.reducer;
