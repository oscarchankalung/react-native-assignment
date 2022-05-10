import i18next from 'i18next';
import { createSelector } from '@reduxjs/toolkit';

import apiSlice from './apiSlice';

import { Articles } from './articleType';
import { LanguageKey } from '../constants/Languages';

export const articleApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<Articles, LanguageKey>({
      query: language => `/getAll/?lang=${language}`,
    }),
  }),
});

const selectArticlesData = createSelector(
  articleApi.endpoints.getArticles.select(i18next.language as LanguageKey),
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
