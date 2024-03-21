"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: '',
    email: '',
    role: '',
    isLoading: true,
    isError: false,
    error: ''
  }
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userInfo.name = payload.name
      state.userInfo.email = payload.email
      
    },
    toggleLoading: (state, { payload }) => {
      state.userInfo.isLoading = payload
    },
    login: (state, { payload }) => {
      state.userInfo.name = payload.name
      state.userInfo.email = payload.email
      state.userInfo.role = payload.role
    },
    logout: (state)=>{
      state.userInfo.name = ''
      state.userInfo.email = ''
      state.userInfo.role = ''
    }
  },

});
export const { setUser, logout ,login ,toggleLoading} = userSlice.actions
export default userSlice.reducer;