import React from "react";
import { Link, Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          title: "Radar",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Urbanist_400Regular",
            fontSize: 30,
          },
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
