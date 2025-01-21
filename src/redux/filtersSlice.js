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
    },
});

// Selectors
export const selectFilters = (state) => state.filters;

export const {setFilter} = filtersSlice.actions;
export default filtersSlice.reducer;
