import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";
import React from "react";

const ProfileStack = () => {
  const { theme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors[theme].background.default,
        },
      }}
    >
      {/* edit profile */}
      <Stack.Screen name="edit/index" />
      {/* settings */}
      <Stack.Screen name="store/index" />
      <Stack.Screen name="address/index" />
      <Stack.Screen name="favourite/index" />
      <Stack.Screen name="history/index" />
      <Stack.Screen name="history/details/[id]" />
    </Stack>
  );
};

export default ProfileStack;
