import { createAsyncThunk } from "@reduxjs/toolkit";
import campersAPI from "../api/campersAPI";

export const fetchVehicle = createAsyncThunk("contacts/fetchAll", async (params, thunkAPI) => {
    try {
        const { data } = await campersAPI.getFiltering(params);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const fetchOneVehicle = createAsyncThunk("contacts/fetchOne", async (id, thunkAPI) => {
    try {
        const { data } = await campersAPI.getOne(id);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
