import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage: storage,
// };

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, userReducer);

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

// export let persistor = persistStore(store);
