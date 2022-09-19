import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const getUserData = createAsyncThunk(
  'user/getData',
  async (_, { dispatch }) => {
    const response = await request.get('user')
    dispatch({ type: 'auth/isLogin' })
    return response.data
  }
)