import { createSelector } from '@reduxjs/toolkit';

import apiSlice from './apiSlice';

import { Articles } from './articleType';

export const articleApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<Articles, void>({
      query: () => '/getAll',
    }),
  }),
});

const selectArticlesData = createSelector(
  articleApi.endpoints.getArticles.select(),
  articlesResult => articlesResult.data ?? {},
);

export const articleSelectors = {
  selectCategories: createSelector(selectArticlesData, articles => {
    return Object.entries(articles).map(([key, value]) => ({
      id: key,
      ...value.category,
    }));
  }),
  selectItems: createSelector(
    [selectArticlesData, (_articles, category: string) => category],
    (articles, category) => {
      return articles[category].items;
    },
  ),
  selectItem: createSelector(
    [
      selectArticlesData,
      (_articles, category: string) => category,
      (_articles, _category, id: string) => id,
    ],
    (articles, category, id) => {
      return articles[category].items.find(item => item.id === id);
    },
  ),
};
