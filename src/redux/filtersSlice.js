import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        location: "",
        vehicleType: "",
        hasAutoTransmission: null,
        hasAC: null,
        hasKitchen: null,
        hasBathroom: null,
        hasTV: null,
        hasRadio: null,
        hasRefrigerator: null,
        hasMicrowave: null,
        hasGas: null,
        hasWater: null,
    },
    reducers: {
        setFilter: (state, action) => {
            const {key, value} = action.payload;
            if (key in state) {
                state[key] = value; // Update the specific filter dynamically
            }
        },
    },
});

// Selectors
export const selectFilters = (state) => state.filters;

export const {setFilter} = filtersSlice.actions;
export default filtersSlice.reducer;
