import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: localStorage.getItem("userInformation")
    ? JSON.parse(localStorage.getItem("userInformation"))
    : null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInformation = action.payload;
      localStorage.setItem("userInformation", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInformation = null;
      localStorage.removeItem("userInformation");
    },
  },
});

export const { setCredentials, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
