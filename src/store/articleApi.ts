import apiSlice from './apiSlice';

export const articleApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => '/getAll',
    }),
  }),
});
