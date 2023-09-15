import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'productlist',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  }
  // ,extraReducers: (builder) => {
  //   builder
      // .addCase(AddBrancheData.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(AddBrancheData.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.Branches.push(action.payload);
      // })
      // .addCase(AddBrancheData.rejected, (state, action) => {
      //   state.isSuccess = false;
      //   state.isError = true;
      //   state.message = action.payload;
      // });
  // },
})

export const { increment, decrement, incrementByAmount } = productSlice.actions
export default productSlice.reducer