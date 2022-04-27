import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArticleItem } from '../../store/article-type';

type Props = {
  item: ArticleItem;
};

const ArticleDetail: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      {Object.entries(item).map(([key, value], index) => (
        <Text key={index}>
          {key}: {value}
        </Text>
      ))}
      <Text></Text>
    </View>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({
  container: { margin: 16 },
});
