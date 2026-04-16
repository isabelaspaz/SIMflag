import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen.js";
import ResultScreen from "./src/screens/ResultScreen.js";
import SharePreviewScreen from "./src/screens/SharePreviewScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen
          name="SharePreview"
          component={SharePreviewScreen}
          options={{ title: "Preview do template" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}