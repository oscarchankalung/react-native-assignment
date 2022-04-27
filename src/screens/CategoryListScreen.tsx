import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';

const CategoryListScreen = () => {
  const categories = useAppSelector(state => state.article.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch({ type: 'article/getCategories' });
    dispatch({ type: 'article/getItems', payload: 'healthcare' });
  }, []);

  return (
    <View>
      <Text>CategoryListScreen</Text>
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
