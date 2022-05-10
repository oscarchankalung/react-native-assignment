import Config from 'react-native-config';

// arguments
import { LanguageKey } from './../constants/Languages';

// return
import { Articles } from '../store/articleType';

const fetchArticles = async (language: LanguageKey): Promise<Articles> => {
  const response = await fetch(`${Config.API_URL}/getAll?lang=${language}`);
  const data = await response.json();
  return data;
};

export const articleService = { fetchArticles };
