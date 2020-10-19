import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { HomeScreen, TextEditor } from './Views/Laboratorium1/FirstApp';

export default function App() {
  const Stack = createStackNavigator();

  function calculateFarenheitFromCelcius(celciusValue) {
    return (celciusValue * 9) / 5 + 32;
  }

  return (
    // Laboratorium 1 - zad. 1
    < NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
          name="To jest nasz własny MIDlet"
          component={HomeScreen}
        />
        <Stack.Screen
          name="TextEditor"
          component={TextEditor}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}