import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './thunk'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: state => ({
      ...state,
      isLogin: true,
    }),
    [logout.fulfilled]: state => ({
      ...state,
      isLogin: false,
    }),
  },
})

export default authSlice.reducer