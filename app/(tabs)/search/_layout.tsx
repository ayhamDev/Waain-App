import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";
import React from "react";

const SearchLayout = () => {
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
      <Stack.Screen name="index" />
      <Stack.Screen name="result/index" />
    </Stack>
  );
};

export default SearchLayout;
