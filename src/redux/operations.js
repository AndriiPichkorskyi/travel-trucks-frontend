import { createAsyncThunk } from '@reduxjs/toolkit';
import campersAPI from '../api/campersAPI';

export const fetchVehicle = createAsyncThunk(
  'vehicle/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await campersAPI.getFiltering(params);
      if (!data) {
        throw new Error('Invalid data');
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchOneVehicle = createAsyncThunk(
  'vehicle/fetchOne',
  async (id, thunkAPI) => {
    try {
      const { data } = await campersAPI.getOne(id);
      if (!data) {
        throw new Error('Invalid data');
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
