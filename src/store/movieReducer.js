import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../Api/Api';

export const fetchMovie = createAsyncThunk(
  'getMovie',
  async () => {
    const response = await Api.getMovie();
    return response;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default movieSlice.reducer;