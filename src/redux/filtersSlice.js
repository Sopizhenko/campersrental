import {createSlice} from "@reduxjs/toolkit";
import {defaultFilters} from "../Utills";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        ...defaultFilters,
    },
    reducers: {
        setFilter: (state, action) => {
            Object.assign(state, action.payload);
        },
        resetFilters: (state) => {
            Object.keys(state).forEach((key) => {
                state[key] = defaultFilters[key];
            }
        )}
    },
});

// Selectors
export const selectFilters = (state) => state.filters;

export const {setFilter, resetFilters} = filtersSlice.actions;
export default filtersSlice.reducer;
