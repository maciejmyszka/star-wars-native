import { configureStore } from '@reduxjs/toolkit';
import { peopleSlice } from '../slices/peopleSlice';
import { moviesSlice } from '../slices/moviesSlice';
import { planetsSlice } from '../slices/planetsSlice';
import { speciesSlice } from '../slices/speciesSlice';
import { starshipsSlice } from '../slices/starshipsSlice';
import { vehiclesSlice } from '../slices/vehiclesSlice';

export const store = configureStore({
  reducer: {
    [peopleSlice.reducerPath]: peopleSlice.reducer,
    [moviesSlice.reducerPath]: moviesSlice.reducer,
    [planetsSlice.reducerPath]: planetsSlice.reducer,
    [speciesSlice.reducerPath]: speciesSlice.reducer,
    [starshipsSlice.reducerPath]: starshipsSlice.reducer,
    [vehiclesSlice.reducerPath]: vehiclesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      peopleSlice.middleware,
      moviesSlice.middleware,
      planetsSlice.middleware,
      speciesSlice.middleware,
      starshipsSlice.middleware,
      vehiclesSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
