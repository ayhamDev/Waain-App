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
    </Stack>
  );
};

export default ProfileStack;
