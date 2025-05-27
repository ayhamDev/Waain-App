import React from "react";
import { View, type ViewProps } from "react-native";

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme"; // your custom hook

export type AppViewProps = ViewProps & {
  type?: keyof (typeof Colors)["light"]; // e.g. 'background', 'text', etc.
};

export function AppView({
  style,
  type = "background",
  ...otherProps
}: AppViewProps) {
  const { theme } = useColorScheme(); // ← uses custom hook now
  const backgroundColor = Colors[theme][type].default;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
