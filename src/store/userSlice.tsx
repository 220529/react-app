import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchById, UserProps } from "@/api/user";

// First, create the thunk
export const fetchUserById = createAsyncThunk("user/fetchByIdStatus", async (userId: number) => {
  const response = await fetchById(userId);
  return response.content;
});

interface UserState {
  userInfo: UserProps;
  loading: boolean;
}

const initialState: UserState = {
  userInfo: {},
  loading: false,
};

// Then, handle actions in your reducers:
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
