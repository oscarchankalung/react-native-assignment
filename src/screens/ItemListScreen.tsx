import React from 'react';
import { StyleSheet, View } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// store
import { useAppSelector } from '../hooks/useStore';
import { articleSelectors } from '../store/articleSlice';

// components
import ArticleItemList from '../components/articles/ArticleItemList';
import LoadingCircule from '../components/layouts/LoadingCircule';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'ItemList'>;
  route: RouteProp<AppStackParamList, 'ItemList'>;
};

const ItemListScreen: React.FC<Props> = ({ route }) => {
  const category = route.params.category;
  const loading = useAppSelector(state => state.article.loading);
  const items = useAppSelector(state =>
    articleSelectors.selectItems(state, category),
  );

  let content;

  if (loading) {
    content = <LoadingCircule />;
  } else {
    content = <ArticleItemList category={category} items={items} />;
  }

  return <View style={styles.container}>{content}</View>;
};

export default ItemListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
  },
});
