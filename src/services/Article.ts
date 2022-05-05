import Config from 'react-native-config';

import { Articles } from './../store/article-type';

const fetchArticles = async (): Promise<Articles> => {
  const response = await fetch(Config.API_URL);
  const data = await response.json();
  return data;
};

export const articleService = { fetchArticles };
