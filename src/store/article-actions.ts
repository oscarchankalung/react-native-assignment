import { createAction } from '@reduxjs/toolkit';

const getArticleCategories = createAction('article/getCategories');

const getArticleItems = createAction<string>('article/getItems');

export const articleSagaActions = {
  getArticleCategories,
  getArticleItems,
};
