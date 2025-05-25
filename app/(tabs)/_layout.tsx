import React from "react";

import AppBottomTabBar from "@/components/global/AppBottomTabBar";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const { theme } = useColorScheme();

  return <AppBottomTabBar />;
}
