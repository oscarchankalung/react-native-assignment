import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { ArticleItem as Item } from '../../store/article-type';
import ArticleItem from './ArticleItem';

type Props = {
  category: string;
  items: Item[];
};

const ArticleItemList: React.FC<Props> = ({ category, items }) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ArticleItem
      category={category}
      id={item.id}
      title={item.name}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <FlatList
      data={items}
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
