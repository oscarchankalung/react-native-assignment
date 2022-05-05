export type Articles = {
  [key in string]: {
    category: ArticleCategory;
    items: ArticleItem[];
  };
};

export type ArticleCategory = {
  name: string;
};

export type ArticleItem = {
  id: string;
  code: string;
  image: string;
  name: string;
  name_tc: string;
  name_sc: string;
  name_en: string;
  description: string;
  description_tc: string;
  description_sc: string;
  description_en: string;
  limit: string;
  limit_tc: string;
  limit_sc: string;
  limit_en: string;
  weight: string;
  max_quota: string;
  item_group_id: string;
  replace: boolean;
};
