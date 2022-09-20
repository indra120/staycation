import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, addCategory } from './thunk'

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
    [addCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      all: [...state.all, payload.category],
    }),
  },
})

export default categoriesSlice.reducer
