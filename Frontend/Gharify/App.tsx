import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Login from './components/login/Login';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: enTranslation },
    },
    lng: 'en', // Set the default language
    interpolation: {
      escapeValue: false,
    },
  });

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <View>
        <Login />
      </View> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export { i18n, App as default };
