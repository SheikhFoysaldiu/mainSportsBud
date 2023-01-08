import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import userReducer from "./reducer/user/user.reducer";
import logger from "redux-logger";

const middleware = [logger];

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["user"],
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(...middleware),

});
export const persistor = persistStore(store);