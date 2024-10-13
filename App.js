import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ComponentsScreen from './src/screen/ComponentsScreen';
import ListScreen from './src/screen/ListScreen';
import TextSizeExample from './src/screen/TextSizeExample';
import Notepad from './src/screen/Notepad';
import CalendarWithEvents from './src/screen/CalendarWithEvents';
import ButtonMatrix from './src/screen/ButtonMatrix';
import QrCodeScreen from './src/screen/QrCodeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          // options={{ title: 'App' }} 
        />
        <Stack.Screen 
          name="List" 
          component={ListScreen} 
          // options={{ title: 'App' }} 
        />
        <Stack.Screen 
          name="Components" 
          component={ComponentsScreen} 
          // options={{ title: 'Components' }} 
        />
        <Stack.Screen 
          name="TextSize" 
          component={TextSizeExample} 
          // options={{ title: 'Components' }} 
        />
        <Stack.Screen 
          name="Notepad" 
          component={Notepad} 
          // options={{ title: 'Components' }} 
        />
        <Stack.Screen 
          name="CalendarWithEvents" 
          component={CalendarWithEvents} 
          // options={{ title: 'Components' }} 
        />
        <Stack.Screen 
          name="ButtonMatrix" 
          component={ButtonMatrix} 
          // options={{ title: 'Components' }} 
        />
        <Stack.Screen 
          name="QrCodeScreen" 
          component={QrCodeScreen} 
          // options={{ title: 'Components' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
