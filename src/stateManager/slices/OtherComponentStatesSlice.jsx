import { createSlice } from "@reduxjs/toolkit";

export const OtherComponentStatesSlice = createSlice({
  name: "OtherComponentStates",
  initialState: {
    loginStatus: false
  },

 
});

  export const selectLoginStatus= (state) =>
  state.OtherComponentStates.loginStatus;

export const { setLoginStatus } =
  OtherComponentStatesSlice.actions;
export default OtherComponentStatesSlice.reducer;
