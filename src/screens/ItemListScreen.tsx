import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// hooks
import { useAppSelector, useAppDispatch } from '../hooks/useStore';

// components
import ArticleItemList from '../components/articles/ArticleItemList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'ItemList'>;
  route: RouteProp<AppStackParamList, 'ItemList'>;
};

const ItemListScreen: React.FC<Props> = ({ route }) => {
  const { loading, items } = useAppSelector(state => state.article);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'article/getItems', payload: route.params });
    return () => {
      dispatch({ type: 'article/setArticleItems', payload: [] });
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
      <ArticleItemList data={items} />
    </View>
  );
};

export default ItemListScreen;

const styles = StyleSheet.create({});
