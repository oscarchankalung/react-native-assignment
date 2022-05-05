import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { ArticleCategoryDict, ArticleCategory } from '../../store/article-type';
import ArticleCategoryItem from './ArticleCategoryItem';

type Props = {
  data: ArticleCategoryDict;
};

const ArticleCategoryList: React.FC<Props> = ({ data }) => {
  const renderItem: ListRenderItem<ArticleCategory> = ({ item }) => (
    <ArticleCategoryItem id={item.id} title={item.name} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default ArticleCategoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    // backgroundColor: 'red',
  },
});
