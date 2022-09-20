import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async (_, { dispatch }) => {
    try {
      const response = await request.get('admin/category')
      return response.data
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)