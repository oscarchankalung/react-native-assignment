import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '../../App';

type Props = {
  id: string;
  title: string;
};

const ArticleCategoryItem: React.FC<Props> = ({ id, title }) => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const onPress = () => {
    navigation.navigate('ItemList', {
      category: id,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ArticleCategoryItem;

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
