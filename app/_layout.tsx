// layout.tsx
import { Stack } from "expo-router";
import Add from './add';
import { NavigationContainer } from "@react-navigation/native";


// layout.tsx
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="add" /> 
      <Stack.Screen name="dress" />
      <Stack.Screen name="closet" />
    </Stack>

  );
}