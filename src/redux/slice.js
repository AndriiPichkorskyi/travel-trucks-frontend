import { createSlice } from "@reduxjs/toolkit";
import { fetchOneVehicle, fetchVehicle } from "./operations";

const slice = createSlice({
    name: "vehicle",
    initialState: { items: [], filters: {}, favorites: [], loading: false, error: null, page: 1, total: 0, limit: 4 },
    reducers: {
        setFilters: (state, { payload }) => {
            state.filters = payload;
            state.page = 1;
        },
        setPage: (state, { payload }) => {
            state.page = payload;
        },
        addToFavorites: (state, { payload }) => {
            state.favorites.push(payload);
        },
        removeFromFavorites: (state, { payload }) => {
            state.favorites = state.favorites.map((id) => id !== payload);
        },
    },
    extraReducers: (builer) => {
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
                (action) => action.type.endsWith("/fulfilled"),
                (state) => {
                    state.loading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                }
            );
    },
});

export const vehicleReducer = slice.reducer;

export const { setFilters, addToFavorites, removeFromFavorites } = slice.actions;

export const selectVehicleItems = (state) => state.items;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export const selectPage = (state) => state.page;
export const selectFilter = (state) => state.filters;
export const selectFavorites = (state) => state.favorites;
export const selectState = (state) => state;
