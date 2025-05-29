import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ViewStyle } from "react-native";
import { AppView } from "./AppView";

type AppCardProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: ViewStyle | ViewStyle[] | undefined;
  selected?: boolean;
};

const AppCard: React.FC<AppCardProps> = ({
  children,
  variant = "secondary",
  selected = false,
  style,
}) => {
  selected ? (variant = "primary") : null;

  const { theme } = useColorScheme();
  const borderColor =
    variant === "primary"
      ? Colors[theme].primary[400]
      : Colors[theme].secondary.default;

  return (
    <AppView
      style={[
        {
          borderColor,
          backgroundColor: Colors[theme].background.default,
          borderWidth: 1,
          borderRadius: 5,
          padding: 16,
          ...(style || {}),
        },
        {
          backgroundColor: selected
            ? Colors[theme].primary[50]
            : Colors[theme].background.default,
        },
      ]}
    >
      {children}
    </AppView>
  );
};

export default AppCard;
