import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../lib/request'

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, router }, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      const response = await request.post('admin/signin', {
        username,
        password,
      })
      dispatch({ type: 'loading/false' })
      dispatch({ type: 'auth/isLogin' })
      router.push('/admin/dashboard')
      return response.data
    } catch (error) {
      dispatch({ type: 'loading/false' })
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      dispatch({ type: 'loading/true' })
      await request.get('admin/signout')
      dispatch({ type: 'alert/clear' })
      dispatch({ type: 'user/clear' })
      dispatch({ type: 'loading/false' })
      dispatch({ type: 'auth/isLogout' })
      return
    } catch (error) {
      dispatch({ type: 'loading/false' })
      return dispatch({ type: 'alert/add', payload: error.response.data })
    }
  }
)