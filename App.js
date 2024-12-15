import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import WelcomeScreen from './screens/WelcomeScreen';
import TabNavigator from './navigators/TabNavigator';

// Tema Kustom
const theme = extendTheme({
  colors: {
    primary: {
      50: '#f7f3ff',
      100: '#d0b3ff',
      200: '#a676ff',
      300: '#7a3aff',
      400: '#4e00ff',
      500: '#3c00cc',
      600: '#290099',
      700: '#190066',
      800: '#110033',
      900: '#080019',
    },
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
