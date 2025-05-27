import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ViewStyle } from "react-native";
import { AppView } from "../AppView";

type AppCardProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
};

const AppCard: React.FC<AppCardProps> = ({
  children,
  variant = "secondary",
  style,
}) => {
  const { theme } = useColorScheme();
  const borderColor =
    variant === "primary"
      ? Colors[theme].primary[400]
      : Colors[theme].primary[950];

  return (
    <AppView
      style={{
        borderColor,
        backgroundColor: Colors[theme].background.default,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 16,
        ...(style || {}),
      }}
    >
      {children}
    </AppView>
  );
};

export default AppCard;
