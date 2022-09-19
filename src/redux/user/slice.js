import { createSlice } from '@reduxjs/toolkit'
import { getUserData } from './thunk'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    role: '',
  },
  reducers: {
    clear: state => ({ ...state, id: '', name: '', role: '' }),
  },
  extraReducers: {
    [getUserData.fulfilled]: (state, { payload }) => ({ ...state, ...payload.user }),
  },
})

export default userSlice.reducer