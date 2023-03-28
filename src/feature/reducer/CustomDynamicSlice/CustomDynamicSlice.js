import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  error: false,
  errorMessage: '',
  showSuccessMessage: false,
  inputData: [],
}

const dynamicHtmlSlice = createSlice({
  name: 'dynamicHtml',
  initialState,
  reducers: {
    createCustom: (state, action) => {
      state.inputData = action.payload
      // console.log('i am from reducer', action.payload)
    },
    checkState: (state, action) => {
      // console.log('i am reducer', action.payload)
      // state.inputData =
    },
  },
})
// console.log('first')
// export default dynamicHtmlSlice.reducer
export const dynamicHtmlReducer = dynamicHtmlSlice.reducer
export const { checkState, createCustom } = dynamicHtmlSlice.actions
