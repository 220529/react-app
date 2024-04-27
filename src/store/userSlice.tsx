import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "@/api/user";
import { login, signup } from "@/api/auth";

// First, create the thunk
export const userLogin = createAsyncThunk("user/userLoginStatus", async (params: any) => {
  const res: any = await login(params);
  if (res?.state === 1) {
    return res.content;
  }
  return null;
});

export const userSignup = createAsyncThunk("user/userSignupStatus", async (params: any) => {
  const res: any = await signup(params);
  if (res?.state === 1) {
    return res.content;
  }
  return null;
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
    builder.addCase(userLogin.pending, state => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.access_token = action.payload.access_token;
      }
    });
    builder.addCase(userLogin.rejected, state => {
      state.loading = false;
    });
    builder.addCase(userSignup.pending, state => {
      state.loading = true;
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.access_token = action.payload.access_token;
      }
    });
    builder.addCase(userSignup.rejected, state => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
