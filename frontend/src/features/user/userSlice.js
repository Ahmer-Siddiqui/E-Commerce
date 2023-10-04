import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userService from './userService';

const initialState = {
  isLoading: false,
  result: {},
  isError: false,
  isSuccess: false,
  message: "",
};

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data, thunkAPI) => {
    try {
      const result = await userService.login(data);
      return thunkAPI.fulfillWithValue(result);
    } 
    catch (error) {
      const message =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (data, thunkAPI) => {
    try {
      const result = await userService.register(data);
      return thunkAPI.fulfillWithValue(result);
    } 
    catch (error) {
      const message =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.result = {}
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
    //UserLogin
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;

      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.result = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
    //UserRegister
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.result = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.result = action.payload;
      })
  },
})

export const { logout, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer