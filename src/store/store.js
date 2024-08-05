import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorites/favoritesSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { moviesApi } from "store/movies/getMoviesRTK";
import { personsApi } from "./person/getPersonDetailsRTK";

export const store = configureStore({
  reducer: {
    favoritesStoreReducer: favoriteReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [personsApi.reducerPath]: personsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(moviesApi.middleware, personsApi.middleware),
});

export const persistor = persistStore(store);
