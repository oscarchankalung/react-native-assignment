import { RootState } from './index';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Articles } from './article-type';

interface ArticleState {
  loading: boolean;
  message: string;
  articles: Articles;
}

const initialState: ArticleState = {
  loading: false,
  message: '',
  articles: {},
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    refreshStart: state => {
      state.loading = true;
    },
    refreshSuccess: state => {
      state.loading = false;
    },
    refreshFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = action.payload;
    },
    setArticles: (state, action: PayloadAction<Articles>) => {
      state.articles = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;

const selectArticles = (state: RootState) => state.article.articles;

export const articleSelectors = {
  selectCategories: createSelector(selectArticles, articles => {
    return Object.entries(articles).map(([key, value]) => ({
      id: key,
      ...value.category,
    }));
  }),
  selectItems: createSelector(
    [selectArticles, (_articles, category: string) => category],
    (articles, category) => {
      return articles[category].items;
    },
  ),
  selectItem: createSelector(
    [
      selectArticles,
      (_articles, category: string) => category,
      (_articles, _category, id: string) => id,
    ],
    (articles, category, id) => {
      return articles[category].items.find(item => item.id === id);
    },
  ),
};
