import React from 'react';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// redux
import { Provider } from 'react-redux';
import store from './store';

// translation
import { useTranslation } from 'react-i18next';

// screens
import LoginScreen from './screens/LoginScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import ItemListScreen from './screens/ItemListScreen';

export type AppStackParamList = {
  Login: undefined;
  CategoryList: undefined;
  ItemList: { category: string };
  ItemDetail: { category: string; id: string };
};

export type AppStackNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: t('screens.login') }}
          />
          <Stack.Screen
            name="CategoryList"
            component={CategoryListScreen}
            options={{ title: t('screens.articleCategoryList') }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemListScreen}
            options={{ title: t('screens.articleItemList') }}
          />
          <Stack.Screen
            name="ItemDetail"
            component={ItemDetailScreen}
            options={{ title: t('screens.articleItemDetail') }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
