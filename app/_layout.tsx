// layout.tsx
import React from 'react';
import { Stack } from "expo-router";
import Add from './add';
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options = {{ headerShown: false}} />
      <Stack.Screen name="add" options = {{ headerShown: false}} /> 
      <Stack.Screen name="personalize" options = {{ headerShown: false}} />
      <Stack.Screen name="dress" options = {{ headerShown: false}} />
      <Stack.Screen name="closet" options = {{ headerShown: false}} /> 
      <Stack.Screen name="personalcloset" options = {{ headerShown: false}} />  
    </Stack>

  );
}