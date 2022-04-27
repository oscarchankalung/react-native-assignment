import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleCategory, ArticleItem } from './article-type';

interface ArticleState {
  loading: boolean;
  message: string;
  categories: ArticleCategory[];
  items: ArticleItem[];
  item: ArticleItem | undefined;
}

const initialState: ArticleState = {
  loading: false,
  message: '',
  categories: [],
  items: [],
  item: undefined,
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
    setArticleCategories: (state, action: PayloadAction<ArticleCategory[]>) => {
      state.categories = action.payload;
    },
    setArticleItems: (state, action: PayloadAction<ArticleItem[]>) => {
      state.items = action.payload;
    },
    setArticleItem: (state, action: PayloadAction<ArticleItem>) => {
      state.item = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
