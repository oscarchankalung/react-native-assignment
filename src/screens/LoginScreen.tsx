import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

// translation
import { useTranslation } from 'react-i18next';

// forms
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../App';

// components
import LanguageSelector from '../components/login/LanguageSelector';

const schema = yup.object().shape({
  username: yup.string().required('form.requiredUsername'),
  password: yup.string().required('form.requiredPassword'),
});

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Login'>;
  route: RouteProp<AppStackParamList, 'Login'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const focusUsername = () => usernameRef.current?.focus();
  const focusPassword = () => passwordRef.current?.focus();

  const onSubmit = handleSubmit(() => {
    navigation.navigate('CategoryList');
    reset();
  });

  return (
    <View style={styles.view}>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field }) => {
          const { onChange, onBlur, value } = field;
          const error = errors.username?.message;
          return (
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={focusUsername}
              activeOpacity={1}>
              <Text style={styles.label}>{t('login.username')}</Text>
              <TextInput
                ref={usernameRef}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={focusPassword}
              />
              {error && <Text style={styles.error}>{t(error)}</Text>}
            </TouchableOpacity>
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field }) => {
          const { onChange, onBlur, value } = field;
          const error = errors.password?.message;
          return (
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={focusPassword}
              activeOpacity={1}>
              <Text style={styles.label}>{t('login.password')}</Text>
              <TextInput
                ref={passwordRef}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && <Text style={styles.error}>{t(error)}</Text>}
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>{t('login.login')}</Text>
      </TouchableOpacity>
      <LanguageSelector />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 12,
    // backgroundColor: 'orange',
  },
  inputContainer: {
    marginBottom: 10,
    // backgroundColor: 'yellow',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    // backgroundColor: 'blue',
  },
  error: {
    color: 'red',
    paddingTop: 10,
    // backgroundColor: 'pink',
  },
  button: {
    height: 40,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
});
