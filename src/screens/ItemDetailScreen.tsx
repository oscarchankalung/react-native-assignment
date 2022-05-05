import React, { Fragment } from 'react';
import { Text, ScrollView } from 'react-native';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// hooks
import { useAppSelector } from '../hooks/useStore';

// components
import ArticleDetail from '../components/articles/ArticleDetail';
import { articleSelectors } from '../store/article-slice';

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
    content = <Text>Loading</Text>;
  } else {
    content = (
      <Fragment>
        {item && <ArticleDetail item={item} />}
        {item && <ArticleDetail item={item} />}
        {item && <ArticleDetail item={item} />}
        {item && <ArticleDetail item={item} />}
      </Fragment>
    );
  }

  return <ScrollView>{content}</ScrollView>;
};

export default ItemDetailScreen;

// const styles = StyleSheet.create({});
