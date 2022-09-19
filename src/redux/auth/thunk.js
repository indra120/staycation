import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, router }, { rejectWithValue }) => {
    try {
      const response = await request.post('admin/signin', {
        username,
        password,
      })
      router.push('/admin/dashboard')
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)