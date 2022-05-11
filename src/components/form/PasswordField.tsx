import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
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

const PasswordField = React.forwardRef<TextInput, Props>((props, ref) => {
  const { label, error } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput ref={ref} style={styles.input} secureTextEntry {...props} />
      </TouchableOpacity>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </TouchableOpacity>
  );
});

export default PasswordField;

const styles = StyleSheet.create({
  ...FormStyles,
  // container: {},
  // inputContainer: {},
  // label: {},
  // input: {},
  // error: {},
});
