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
    clear: state => ({ ...state, id: '', name: '', role: '' }),
  },
})

export default userSlice.reducer