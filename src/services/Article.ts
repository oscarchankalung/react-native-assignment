import Config from 'react-native-config';

import { Articles } from '../store/articleType';

const fetchArticles = async (): Promise<Articles> => {
  const response = await fetch(`${Config.API_URL}/getAll`);
  const data = await response.json();
  return data;
};

export const articleService = { fetchArticles };
