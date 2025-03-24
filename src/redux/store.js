import {configureStore} from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import favoritesReducer from "./favoritesSlice";
import filtersReducer from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
    key: 'favorites',
    storage,
};

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        favorites: persistedFavoritesReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
