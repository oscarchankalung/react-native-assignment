import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import FormStyles from './FormStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface Props extends TextInputProps {
  label: string;
  value: string;
  error: string;
  onBlur: () => void;
  onChangeText: () => void;
  onSubmitEditing?: () => void;
  onPress?: () => void;
}

const PasswordField = React.forwardRef<TextInput, Props>((props, ref) => {
  const { label, error, onPress } = props;

  const [showPassword, setShowPassword] = useState(false);
  const onToggleShowPasswordPressed = () => {
    setShowPassword(prev => !prev);
  };

  const PasswordIcons = {
    Show: <Icon name="eye-outline" size={24} color="black" />,
    Hide: <Icon name="eye-off-outline" size={24} color="black" />,
  };
  const PasswordToggle = (
    <TouchableOpacity
      style={styles.icon}
      onPress={onToggleShowPasswordPressed}
      activeOpacity={1}>
      {showPassword ? PasswordIcons.Show : PasswordIcons.Hide}
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref}
          style={styles.inputField}
          secureTextEntry={!showPassword}
          {...props}
        />
        {PasswordToggle}
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </TouchableOpacity>
  );
});

export default PasswordField;

const styles = StyleSheet.create({
  ...FormStyles,
  // container: {},
  // label: {},
  // inputContainer: {},
  // inputField: {},
  // icon: {},
  // error: {},
});
