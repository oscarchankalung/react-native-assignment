import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { ArticleCategory as Item } from '../../store/article-type';
import ArticleCategory from './ArticleCategory';

type Props = {
  data: Item[];
};

const ArticleCategoryList: React.FC<Props> = ({ data }) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ArticleCategory id={item.id} title={item.name} />
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
