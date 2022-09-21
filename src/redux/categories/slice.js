import { createSlice } from '@reduxjs/toolkit'
import {
  fetchCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from './thunk'

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
    [editCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      all: state.all.map(category =>
        category.id === payload.id ? { ...category, ...payload } : category
      ),
    }),
    [deleteCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      all: state.all.filter(category => category.id !== payload),
    }),
  },
})

export default categoriesSlice.reducer