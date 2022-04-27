import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { ArticleItem as Item } from '../../store/article-type';
import ArticleItem from './ArticleItem';

type Props = {
  data: Item[];
};

const ArticleItemList: React.FC<Props> = ({ data }) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ArticleItem
      category={item.category}
      id={item.id}
      title={item.name}
      description={item.description}
      image={item.image}
    />
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

export default ArticleItemList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    // backgroundColor: 'red',
  },
});
