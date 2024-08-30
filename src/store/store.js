import { configureStore } from '@reduxjs/toolkit'
import dataListReducer from '../reducers/dataList/dataListSlice'

export const store = configureStore({
  reducer: {
    dataList: dataListReducer,
  },
})