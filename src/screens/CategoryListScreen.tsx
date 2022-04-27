import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// hooks
import { useAppDispatch, useAppSelector } from '../hooks/useStore';

// components
import ArticleCategoryList from '../components/articles/ArticleCategoryList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen: React.FC<Props> = () => {
  const { loading, categories } = useAppSelector(state => state.article);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'article/getCategories', payload: {} });
    return () => {
      dispatch({ type: 'article/setArticleCategories', payload: [] });
    };
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <ArticleCategoryList data={categories} />
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
