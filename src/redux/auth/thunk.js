import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request().post('admin/signin', data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)