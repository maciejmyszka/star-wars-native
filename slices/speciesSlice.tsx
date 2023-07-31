import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const speciesSlice = createApi({
  reducerPath: 'speciesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllSpecies: builder.query({
      query: (page) => (page ? `species/?page=${page}` : 'species'),
    } as any),
    getSingleSpecie: builder.query({
      query: (id) => `species/${id}`,
    } as any),
  }),
});

export const { useGetSingleSpecieQuery, useGetAllSpeciesQuery } = speciesSlice;
