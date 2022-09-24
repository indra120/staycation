import { createSlice } from '@reduxjs/toolkit'
import { fetchBank, addBank, editBank, deleteBank } from './thunk'

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    all: [],
    selected: {},
  },
  reducers: {
    select: (state, { payload }) => ({ ...state, selected: payload }),
  },
  extraReducers: {
    [fetchBank.fulfilled]: (state, { payload }) => ({
      ...state,
      all: payload.bank,
    }),
    [addBank.fulfilled]: (state, { payload }) => ({
      ...state,
      all: [...state.all, payload],
    }),
    [editBank.fulfilled]: (state, { payload }) => ({
      ...state,
      all: state.all.map(bank => (bank.id === payload.id ? payload : bank)),
    }),
    [deleteBank.fulfilled]: (state, { payload }) => ({
      ...state,
      all: state.all.filter(bank => bank.id !== payload),
    }),
  },
})

export default bankSlice.reducer
