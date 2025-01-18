import {selectFilters} from "./filtersSlice.js";
import {fetchCamper, fetchCampers} from "./campersOps.js";
import {createSelector, createSlice} from "@reduxjs/toolkit";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
}

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        campers: [],
        selectedCamper: null,
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedCamper: (state, action) => {
            state.selectedCamper = action.payload;
        },
        clearSelectedCamper: (state) => {
            state.selectedCamper = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.campers = action.payload;
                state.loading = false;
            })
            .addCase(fetchCamper.pending, handlePending)
            .addCase(fetchCamper.rejected, handleRejected)
            .addCase(fetchCamper.fulfilled, (state, action) => {
                state.selectedCamper = action.payload;
                state.loading = false;
            });
    },
});

// Selectors
export const selectCampers = (state) => state.campers.campers;
export const selectLoadingCampers = (state) => state.campers.loading;
export const selectErrorCampers = (state) => state.campers.error;
export const selectSelectedCamper = (state) => state.campers.selectedCamper;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilters],
    (campers, filters) => {
        const {data = []} = campers; // Fallback to an empty array if data is undefined
        const {location, vehicleType} = filters;

        return data.items.filter((camper) => {
            if (location && camper.location !== location) {
                return false;
            }
            if (vehicleType && camper.vehicleType !== vehicleType) {
                return false;
            }
            return true;
        });
    }
);

export const selectSelectedCamperReviews = createSelector(
    selectSelectedCamper,
    (selectedCamper) => {
        return selectedCamper?.reviews || [];
    }
);

export const selectSelectedCamperStats = createSelector(
    selectSelectedCamper,
    (selectedCamper) => ({
        rating: selectedCamper?.rating || 0,
        totalReviews: selectedCamper?.reviews.length || 0,
        hasReviews: selectedCamper?.reviews.length > 0,
    })
);

export const selectSelectedCamperRating = createSelector(
    selectSelectedCamper,
    (selectedCamper) => {
        return selectedCamper?.rating || 0;
    }
);

export const selectSelectedCamperLocation = createSelector(
    selectSelectedCamper,
    (selectedCamper) => {
        return selectedCamper?.location || "";
    }
);

export const selectSelectedCamperImages = createSelector(
    selectSelectedCamper,
    (selectedCamper) => ({
        images: selectedCamper?.gallery || [],
        alt: selectedCamper?.name || "",
    })
);

export const {setSelectedCamper, clearSelectedCamper} = campersSlice.actions;
export default campersSlice.reducer;