import React, { Fragment } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// store
import { useAppSelector } from '../hooks/useStore';
import { articleSelectors } from '../store/articleSlice';

// components
import ArticleItemDetail from '../components/articles/ArticleItemDetail';
import LoadingCircule from '../components/layouts/LoadingCircule';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'ItemDetail'>;
  route: RouteProp<AppStackParamList, 'ItemDetail'>;
};

const ItemDetailScreen: React.FC<Props> = ({ route }) => {
  const { category, id } = route.params;
  const loading = useAppSelector(state => state.article.loading);
  const item = useAppSelector(state =>
    articleSelectors.selectItem(state, category, id),
  );

  let content;

  if (loading) {
    content = <LoadingCircule />;
  } else if (!item) {
    content = <Text>Item not found!</Text>;
  } else if (item) {
    content = (
      <Fragment>
        <ArticleItemDetail item={item} />
        <ArticleItemDetail item={item} />
        <ArticleItemDetail item={item} />
      </Fragment>
    );
  }

  return <ScrollView style={styles.container}>{content}</ScrollView>;
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    // backgroundColor: 'orange',
  },
});
