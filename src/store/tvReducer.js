import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../Api/Api';

export const fetchTv = createAsyncThunk(
  'getTv',
  async () => {
    const response = await Api.getTv();
    return response;
  }
);

const tvSlice = createSlice({
  name: 'tv',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTv.pending, (state) => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(fetchTv.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(fetchTv.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default tvSlice.reducer;