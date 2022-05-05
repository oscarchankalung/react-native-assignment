import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArticleItem } from '../../store/articleType';

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
    </View>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({
  container: { margin: 16 },
});
