import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// hooks
import { useAppSelector, useAppDispatch } from '../hooks/useStore';

// components
import ArticleDetail from '../components/articles/ArticleDetail';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'ItemDetail'>;
  route: RouteProp<AppStackParamList, 'ItemDetail'>;
};

const ItemDetailScreen: React.FC<Props> = ({ route }) => {
  const { loading, item } = useAppSelector(state => state.article);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'article/getItem', payload: route.params });
    return () => {
      dispatch({ type: 'article/setArticleItem', payload: null });
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
    <ScrollView>
      {item && <ArticleDetail item={item} />}
      {item && <ArticleDetail item={item} />}
      {item && <ArticleDetail item={item} />}
      {item && <ArticleDetail item={item} />}
    </ScrollView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({});
