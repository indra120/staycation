import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    true: state => true,
    false: state => false,
  },
})

export default loadingSlice.reducer