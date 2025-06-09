import { createSlice } from '@reduxjs/toolkit';
import { fetchOneVehicle, fetchVehicle } from './operations';

const slice = createSlice({
  name: 'vehicle',
  initialState: {
    items: [],
    filters: {},
    loading: false,
    error: null,
    page: 1,
    total: 0,
    limit: 4,
  },
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
      state.page = 1;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: builer => {
    builer
      .addCase(fetchVehicle.fulfilled, (state, { payload }) => {
        if (state.page === 1) {
          state.items = payload.items;
        } else {
          state.items.push(...payload.items);
        }
        state.total = payload.total;
        state.page += 1;
      })
      .addCase(fetchOneVehicle.fulfilled, (state, { payload }) => {
        state.items = [payload];
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
          1;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const vehicleReducer = slice.reducer;

export const { setFilters } = slice.actions;

export const selectVehicleItems = state => state.vehicle.items;
export const selectLoading = state => state.vehicle.loading;
export const selectError = state => state.vehicle.error;
export const selectTotal = state => state.vehicle.total;
export const selectLimit = state => state.vehicle.limit;
export const selectPage = state => state.vehicle.page;
export const selectFilters = state => state.vehicle.filters;
