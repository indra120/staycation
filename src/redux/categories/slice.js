import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './thunk'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    all: [],
    selected: {},
  },
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => ({
      ...state,
      all: payload.categories,
    }),
  },
})

export default categoriesSlice.reducer
