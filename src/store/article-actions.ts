import { createAction } from '@reduxjs/toolkit';
import {
  fetchArticleCategoryParam,
  fetchArticleItemsParam,
  fetchArticleItemParam,
} from '../services/Article';

const getArticleCategories = createAction<fetchArticleCategoryParam>(
  'article/getCategories',
);

const getArticleItems =
  createAction<fetchArticleItemsParam>('article/getItems');

const getArticleItem = createAction<fetchArticleItemParam>('article/getItem');

export const articleSagaActions = {
  getArticleCategories,
  getArticleItems,
  getArticleItem,
};
