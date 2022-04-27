import Config from 'react-native-config';

const api =
  'https://dev.prismcubehk.com/hkcsd/index.php/api/visitStatusHandInArticles/getAll?lang=tc';

export const fetchArticleCategory = async () => {
  const response = await fetch(Config.AP, {
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  // console.log(data);
  return data;
};

export const fetchArticleItem = async (category: string) => {
  const response = await fetch(api);
  const data = await response.json();
  // console.log(data, category);
  return data;
};
