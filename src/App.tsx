import React from 'react';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import LoginScreen from './screens/LoginScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import ItemListScreen from './screens/ItemListScreen';

// redux
import store from './store';
import { Provider } from 'react-redux';

export type AppStackParamList = {
  Login: undefined;
  CategoryList: undefined;
  ItemDetail: undefined;
  ItemList: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CategoryList">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CategoryList" component={CategoryListScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
          <Stack.Screen name="ItemList" component={ItemListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
