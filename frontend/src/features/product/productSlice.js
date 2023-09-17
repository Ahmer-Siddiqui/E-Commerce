import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productService';

const initialState = {
  products: [],
  searchProduct: [],
  
}

export const allProducts = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      const result = await productService.getAllProduct();
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
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

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    try {
      const result = await productService.deleteSingleProduct(id);
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
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

export const searchingProducts = createAsyncThunk(
  "product/search",
  async (key, thunkAPI) => {
    console.log(key);
    try {
      const result = await productService.searchProductByKey(key);
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
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
    //AllProduct
    .addCase(allProducts.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(allProducts.fulfilled, (state, action) => {
      state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //searchProduct
      .addCase(searchingProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(searchingProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(searchingProducts.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
    },
  })

export const { increment, decrement, incrementByAmount } = productSlice.actions
export default productSlice.reducer