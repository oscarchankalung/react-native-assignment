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
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  const usernameIcon = <Icon name="account" size={24} color="black" />;

  const onSubmit = handleSubmit(() => {
    navigation.navigate('CategoryList');
    reset();
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field }) => {
          const { onChange, onBlur, value } = field;
          const error = errors.username?.message;

          return (
            <TextField
              ref={usernameRef}
              label={t('login.username')}
              value={value}
              icon={usernameIcon}
              error={t(error)}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={focusPassword}
              onPress={focusUsername}
              returnKeyType="next"
              keyboardType="default"
            />
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
            <PasswordField
              ref={passwordRef}
              label={t('login.password')}
              value={value}
              error={t(error)}
              onBlur={onBlur}
              onChangeText={onChange}
              onPress={focusPassword}
              returnKeyType="done"
              keyboardType="default"
            />
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
  container: {
    flex: 1,
    padding: 12,
    // backgroundColor: 'orange',
  },
  button: {
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
});
