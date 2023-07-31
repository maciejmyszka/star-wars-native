import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleSlice = createApi({
  reducerPath: 'peopleSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllPeople: builder.query({
      query: (page) => (page ? `people/?page=${page}` : 'people'),
    } as any),
    getSinglePeople: builder.query({
      query: (id) => `people/${id}`,
    } as any),
  }),
});

export const { useGetAllPeopleQuery, useGetSinglePeopleQuery } = peopleSlice;
