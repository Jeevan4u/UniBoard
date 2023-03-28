import { configureStore } from '@reduxjs/toolkit'
// import CustomDynamicSlice from '../reducer/CustomDynamicSlice/CustomDynamicSlice'
import { dynamicHtmlReducer } from '../reducer/CustomDynamicSlice/CustomDynamicSlice'
export const store = configureStore({
  reducer: {
    customeDynamicList: dynamicHtmlReducer,
  },
})
