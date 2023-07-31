import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const planetsSlice = createApi({
  reducerPath: 'planetsSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllPlanets: builder.query({
      query: (page) => (page ? `planets/?page=${page}` : 'planets'),
    } as any),
    getSinglePlanet: builder.query({
      query: (id) => `planets/${id}`,
    } as any),
  }),
});

export const { useGetAllPlanetsQuery, useGetSinglePlanetQuery } = planetsSlice;
