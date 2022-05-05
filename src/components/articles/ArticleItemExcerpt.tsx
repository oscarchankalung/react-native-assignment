import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '../../App';

type Props = {
  category: string;
  id: string;
  title: string;
  description: string;
  image: string;
};

const ArticleItemExcerpt: React.FC<Props> = ({
  category,
  id,
  title,
  description,
  image,
}) => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const onPress = () => {
    navigation.navigate('ItemDetail', {
      category: category,
      id: id,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ArticleItemExcerpt;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
