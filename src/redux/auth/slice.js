import { createSlice } from '@reduxjs/toolkit'
import { login } from './thunk'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [login.pending]: state => ({ ...state, loading: true }),
    [login.fulfilled]: state => {
      return {
        ...state,
        loading: false,
        isLogin: true,
      }
    },
    [login.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
})

export default authSlice.reducer