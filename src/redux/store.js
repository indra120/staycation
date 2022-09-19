import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loading/slice'
import alertReducer from './alert/slice'
import authReducer from './auth/slice'
import userReducer from './user/slice'

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    alert: alertReducer,
    auth: authReducer,
    user: userReducer,
  },
})

export default store