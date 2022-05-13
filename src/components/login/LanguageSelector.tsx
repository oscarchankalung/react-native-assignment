import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// translation
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../constants/Languages';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const renderedLanguageButtons = Object.entries(LANGUAGES).map(
    ([key, language]) => {
      const changeLanguage = () => i18n.changeLanguage(language.i18n);
      const selected = i18n.language === language.i18n;
      const textStyle = selected ? styles.selectedText : styles.text;

      return (
        <TouchableOpacity
          key={key}
          style={styles.button}
          onPress={changeLanguage}>
          <Text style={textStyle}>{language.label}</Text>
        </TouchableOpacity>
      );
    },
  );

  return <View style={styles.row}>{renderedLanguageButtons}</View>;
};

export default LanguageSelector;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  button: {
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    // backgroundColor: 'orange',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  selectedText: {
    fontSize: 16,
    color: 'red',
  },
});
