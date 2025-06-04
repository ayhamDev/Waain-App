import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ViewStyle } from "react-native";
import { AppView } from "./AppView";

type AppBadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
};

const AppBadge: React.FC<AppBadgeProps> = ({
  children,
  variant = "secondary",
  style,
}) => {
  const { theme } = useColorScheme();
  const borderColor =
    variant === "primary"
      ? Colors[theme].primary[400]
      : Colors[theme].secondary.default;
  const backgroundColor =
    variant == "primary"
      ? Colors[theme].primary[100]
      : Colors[theme].background.default;
  return (
    <AppView
      style={[
        {
          borderColor,
          backgroundColor,
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          paddingHorizontal: 8,
          alignSelf: "flex-start",
          ...(style || {}),
        },
      ]}
    >
      {children}
    </AppView>
  );
};

export default AppBadge;
