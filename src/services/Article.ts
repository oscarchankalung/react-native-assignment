import Config from 'react-native-config';
import { Article } from './../store/article-type';

export type fetchArticleCategoryParam = {};

export type fetchArticleItemsParam = {
  category: string;
};

export type fetchArticleItemParam = {
  category: string;
  id: string;
};

export const fetchArticleCategory = async (
  param: fetchArticleCategoryParam,
) => {
  const response = await fetch(Config.API_URL);
  const data = await response.json();

  const categories = Object.entries(data).map(([key, value]) => ({
    ...(value as Article).category,
    id: key,
  }));

  return categories;
};

export const fetchArticleItems = async (param: fetchArticleItemsParam) => {
  const response = await fetch(Config.API_URL);
  const data = await response.json();

  const items = Object.entries(data)
    .filter(([key, value]) => key === param.category)
    .map(([key, value]) => (value as Article).items)[0]
    .map(item => ({ ...item, category: param.category }));

  return items;
};

export const fetchArticleItem = async (param: fetchArticleItemParam) => {
  const response = await fetch(Config.API_URL);
  const data = await response.json();

  const item = Object.entries(data)
    .filter(([key, value]) => key === param.category)
    .map(([key, value]) => (value as Article).items)[0]
    .filter(item => item.id === param.id)[0];

  return item;
};
