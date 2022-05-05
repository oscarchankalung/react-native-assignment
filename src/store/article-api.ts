import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => '',
    }),
  }),
});
