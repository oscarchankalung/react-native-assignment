import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// translation
import { useTranslation } from 'react-i18next';

const LoadingCircule = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('async.loading')}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingCircule;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  text: {
    fontSize: 20,
    marginBottom: 24,
  },
});
