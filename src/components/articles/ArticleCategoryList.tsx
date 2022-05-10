import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import ArticleCategoryExcerpt from './ArticleCategoryExcerpt';

type ArticleCategoryType = {
  id: string;
  name: string;
};

type Props = {
  data: ArticleCategoryType[];
};

const ArticleCategoryList: React.FC<Props> = ({ data }) => {
  const renderItem: ListRenderItem<ArticleCategoryType> = ({ item }) => (
    <ArticleCategoryExcerpt id={item.id} title={item.name} />
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
