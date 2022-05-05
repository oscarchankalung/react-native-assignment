import { createAction } from '@reduxjs/toolkit';

const getArticles = createAction('article/getArticles');

export const articleSagaActions = {
  getArticles,
};
