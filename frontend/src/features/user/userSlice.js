import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userService from './userService';

const initialState = {
  invoicing: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userLoginData, thunkAPI) => {
    // try {
      const result = await userService.login();
      // return result;
    // } 
    // catch (error) {
    //   const message =
    //       (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();
    //   return thunkAPI.rejectWithValue(message);
    // }
  }
);

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
  ,extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = true;

      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Branches.push(action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
})

export const { increment, decrement, incrementByAmount } = productSlice.actions
export default productSlice.reducer