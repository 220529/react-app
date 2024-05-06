import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  userInfo: any;
  access_token: string;
}

const initialState: UserState = {
  userInfo: {},
  access_token: "",
};

// Then, handle actions in your reducers:
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setToken, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
