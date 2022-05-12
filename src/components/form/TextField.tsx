import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import FormStyles from './FormStyles';

export interface Props extends TextInputProps {
  label: string;
  value: string;
  error: string;
  icon?: React.ReactNode;
  onBlur: () => void;
  onChangeText: () => void;
  onSubmitEditing?: () => void;
  onPress?: () => void;
}

const TextField = React.forwardRef<TextInput, Props>((props, ref) => {
  const { label, icon, error, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput ref={ref} style={styles.inputField} {...props} />
        <View style={styles.icon}>{icon}</View>
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </TouchableOpacity>
  );
});

export default TextField;

const styles = StyleSheet.create({
  ...FormStyles,
  // container: {},
  // label: {},
  // inputContainer: {},
  // inputField: {},
  // inputIcon: {},
  // error: {},
});
