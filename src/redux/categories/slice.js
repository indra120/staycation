import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, addCategory, editCategory } from './thunk'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    all: [],
    selected: {},
  },
  reducers: {
    select: (state, { payload }) => ({ ...state, selected: payload }),
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => ({
      ...state,
      all: payload.categories,
    }),
    [addCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      all: [...state.all, payload.category],
    }),
    [editCategory.fulfilled]: (state, { payload }) => {
      state.all[payload.index] = payload
    },
  },
})

export default categoriesSlice.reducer