import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    status: '',
    message: '',
  },
  reducers: {
    add: (state, { payload }) => ({ ...state, ...payload }),
    clear: state => ({ ...state, status: '', message: '' }),
  },
})

export default alertSlice.reducer