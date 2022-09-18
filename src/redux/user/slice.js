import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    role: '',
  },
  reducers: {
    add: (state, { payload }) => ({ ...state, ...payload }),
  },
})

export default userSlice.reducer