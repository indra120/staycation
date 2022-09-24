import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const fetchBank = createAsyncThunk(
  'bank/fetch',
  async (_, { dispatch }) => {
    try {
      const response = await request.get('admin/bank')
      return response.data
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)

export const addBank = createAsyncThunk(
  'bank/add',
  async (data, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      const response = await request.post('admin/bank', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      dispatch({ type: 'loading/false' })
      document.getElementById('closeAddModal').click()
      dispatch({
        type: 'alert/add',
        payload: {
          message: response.data.message,
          status: response.data.status,
        },
      })
      return response.data.bank
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)

export const editBank = createAsyncThunk(
  'bank/edit',
  async (formData, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      const response = await request.put('admin/bank', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      dispatch({ type: 'loading/false' })
      document.getElementById('closeEditModal').click()
      dispatch({
        type: 'alert/add',
        payload: {
          message: response.data.message,
          status: response.data.status,
        },
      })
      return response.data.bank
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)

export const deleteBank = createAsyncThunk(
  'bank/delete',
  async (id, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      const response = await request.delete(`admin/bank/${id}`)
      dispatch({ type: 'loading/false' })
      document.getElementById('closeDeleteModal').click()
      dispatch({ type: 'alert/add', payload: response.data })
      return id
    } catch (error) {
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)