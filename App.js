import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ComponentsScreen from './src/screen/ComponentsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Components">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          // options={{ title: 'App' }} 
        />
        <Stack.Screen 
          name="Components" 
          component={ComponentsScreen} 
          // options={{ title: 'Components' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
