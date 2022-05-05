import React from 'react';
import { Text, View } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// hooks
import { useAppSelector } from '../hooks/useStore';

// components
import ArticleItemList from '../components/articles/ArticleItemList';
import { articleSelectors } from '../store/articleSlice';

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
    content = <Text>Loading</Text>;
  } else {
    content = <ArticleItemList category={category} items={items} />;
  }

  return <View>{content}</View>;
};

export default ItemListScreen;

// const styles = StyleSheet.create({});
