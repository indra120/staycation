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

export const addCategory = createAsyncThunk(
  'categories/add',
  async (name, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      const response = await request.post('admin/category', { name })
      dispatch({ type: 'alert/add', payload: response.data })
      dispatch({ type: 'loading/false' })
      return response.data
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)