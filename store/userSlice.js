import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
