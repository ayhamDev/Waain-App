import { Stack } from "expo-router";
import React from "react";

const ProfileStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)/profile/index" />
      <Stack.Screen name="FavStore" />
    </Stack>
  );
};

export default ProfileStack;
