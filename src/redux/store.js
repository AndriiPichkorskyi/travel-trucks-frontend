import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { vehicleReducer } from './vehicleSlice';
import { favoriteReducer } from './favoriteSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};
const favoritePersistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: { vehicle: vehicleReducer, favorites: favoritePersistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
