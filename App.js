import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  HomeScreen,
  TextEditor,
  Converter,
} from "./Views/Laboratorium1/FirstApp";
import { Lab2_1 } from "./Views/Laboratorium2/Lab2";

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
        <Stack.Screen name="HomeScreen" component={Lab2_1} />
        {/* <Stack.Screen name="Wyliczanie pierwiastka" component={Lab2_1} /> */}
        {/* <Stack.Screen name="Losowe wypełnianie tablicy" component={Lab2_2} /> */}
        {/* <Stack.Screen name="Zgadywanka" component={Lab2_3} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
