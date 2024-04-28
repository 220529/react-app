import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup, info, UserProps, LoginProps } from "@/api/user";

// First, create the thunk
export const userLogin = createAsyncThunk("user/userLoginStatus", async (params: LoginProps) => {
  return await login(params);
});

export const userSignup = createAsyncThunk("user/userSignupStatus", async (params: LoginProps) => {
  return await signup(params);
});

export const fetchUserInfo = createAsyncThunk("user/userInfo", async () => {
  return await info();
});

interface UserState {
  userInfo: UserProps;
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
      action => {
        return ["user/userLoginStatus", "user/userSignupStatus", "user/userInfo"].some(type =>
          action.type.includes(type)
        );
      },
      (state, action: any) => {
        if (action.meta.requestStatus === "pending") {
          state.loading = true;
        } else {
          state.loading = false;
          if (action.meta.requestStatus === "fulfilled" && action.payload) {
            if (action.type.includes("user/userInfo")) {
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
