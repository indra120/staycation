import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    isLogin: state => ({ ...state, isLogin: true }),
    isLogout: state => ({ ...state, isLogin: false }),
  },
})

export default authSlice.reducer