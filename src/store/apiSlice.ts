import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: () => ({}),
});

export default apiSlice;
