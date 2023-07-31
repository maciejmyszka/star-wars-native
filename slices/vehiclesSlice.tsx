import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehiclesSlice = createApi({
  reducerPath: 'vehiclesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllVehicles: builder.query({
      query: (page) => (page ? `vehicles/?page=${page}` : 'vehicles'),
    } as any),
    getSingleVehicle: builder.query({
      query: (id) => `vehicles/${id}`,
    } as any),
  }),
});

export const { useGetSingleVehicleQuery, useGetAllVehiclesQuery } =
  vehiclesSlice;
