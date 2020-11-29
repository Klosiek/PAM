import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
// import {
//   HomeScreen,
//   TextEditor,
//   Converter,
// } from "./Views/Laboratorium1/FirstApp";
import HomeScreen from "./Views/Laboratorium2/HomeScreen";
import { Lab2_1 } from "./Views/Laboratorium2/Lab2_1";
import { Lab2_2 } from "./Views/Laboratorium2/Lab2_2";
import { Lab3_2 } from "./Views/Laboratorium3/Lab3_2";

// Laboratorium 1 - zad. 1
// export default function App() {
//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="To jest nasz własny MIDlet"
//           component={HomeScreen}
//         />
//         <Stack.Screen name="TextEditor" component={TextEditor} />
//         <Stack.Screen name="Converter" component={Converter} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// Laboratorium 2 - zad. 1
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hangman"
          options={{ title: "Hangman" }}
          component={Lab3_2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
