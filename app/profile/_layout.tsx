import { Stack } from "expo-router";
import React from "react";

const ProfileStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="store/index" />
      <Stack.Screen name="address/index" />
      <Stack.Screen name="favourite/index" />
      <Stack.Screen name="history/index" />
      <Stack.Screen name="history/details/[id]" />
    </Stack>
  );
};

export default ProfileStack;
