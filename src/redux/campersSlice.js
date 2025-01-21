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
        currentPage: 1,
        totalCampers: 0,
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
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.totalCampers = action.payload.total;
                state.campers = action.payload.items;
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
export const selectTotalCampers = (state) => state.campers.totalCampers;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectHasCampers = (state) => state.campers.campers.length > 0;

export const selectSelectedCamperReviews = createSelector(
    selectSelectedCamper,
    (selectedCamper) => {
        return selectedCamper?.reviews || [];
    }
);

export const selectSelectedCamperPrice = createSelector(
    selectSelectedCamper,
    (selectedCamper) => {
        return selectedCamper?.price || 0;
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

export const selectSelectedCamperVehicleDetails = createSelector(
    selectSelectedCamper,
    (selectedCamper) => ({
        Form: selectedCamper?.form || "-",
        Length: selectedCamper?.length || "-",
        Width: selectedCamper?.width || "-",
        Height: selectedCamper?.height || "-",
        Tank: selectedCamper?.tank || "-",
        Consumption: selectedCamper?.consumption || "-",
    })
);

export const {setSelectedCamper, clearSelectedCamper, setCurrentPage} = campersSlice.actions;
export default campersSlice.reducer;