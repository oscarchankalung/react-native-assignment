import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { ArticleItem } from '../../store/articleType';
import ArticleItemExcerpt from './ArticleItemExcerpt';

type Props = {
  category: string;
  items: ArticleItem[];
};

const ArticleItemList: React.FC<Props> = ({ category, items }) => {
  const renderItem: ListRenderItem<ArticleItem> = ({ item }) => (
    <ArticleItemExcerpt
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
    flexGrow: 1,
    paddingVertical: 8,
    // backgroundColor: 'red',
  },
});
