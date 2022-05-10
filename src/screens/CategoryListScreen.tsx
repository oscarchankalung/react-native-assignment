import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// store
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { articleSelectors } from '../store/articleSlice';
// import { articleSelectors } from '../store/articleApi';
// import { articleApi } from '../store/articleApi';

// components
import ArticleCategoryList from '../components/articles/ArticleCategoryList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen: React.FC<Props> = () => {
  const loading = useAppSelector(state => state.article.loading);
  const categories = useAppSelector(state =>
    articleSelectors.selectCategories(state),
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'article/getArticles' });
  }, [dispatch]);

  // articleApi.useGetArticlesQuery();

  let content;

  if (loading) {
    content = <Text>Loading</Text>;
  } else {
    content = <ArticleCategoryList data={categories} />;
  }

  return <View>{content}</View>;
};

export default CategoryListScreen;

// const styles = StyleSheet.create({});
