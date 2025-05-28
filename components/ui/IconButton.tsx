import { Colors } from "@/constants/Styles";
import RNBounceable from "@freakycoder/react-native-bounceable";
import React from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle } from "react-native";

type IconButtonProps = {
  onPress?: () => void;
  icon: (color: string) => React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  size?: number;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
  style?: ViewStyle;
};

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  loading = false,
  disabled = false,
  size = 44,
  rounded = true,
  variant = "primary",
  style,
}) => {
  const isDisabled = disabled || loading;

  const buttonStyles = [
    {
      width: size,
      height: size,
      borderRadius: rounded ? size / 2 : 5,
    },
    styles.base,
    variantStyles[variant],
    isDisabled && styles.disabled,
    style,
  ];

  const iconColor =
    variantTextStyles[variant]?.color || Colors.light.primary["950"];

  const content = loading ? (
    <ActivityIndicator size="small" color={iconColor} />
  ) : (
    icon(iconColor)
  );

  return (
    <RNBounceable
      onPress={onPress}
      bounceEffectIn={0.75}
      disabled={isDisabled}
      style={buttonStyles}
    >
      <View style={styles.center}>{content}</View>
    </RNBounceable>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.light.primary["300"],
  },
  secondary: {
    backgroundColor: Colors.light.primary["950"],
  },
  outline: {
    borderWidth: 1,
    borderColor: Colors.light.primary["950"],
    backgroundColor: Colors.light.background.default,
  },
  danger: {
    backgroundColor: Colors.light.alart.default,
  },
});

const variantTextStyles = StyleSheet.create({
  primary: {
    color: Colors.light.primary["950"],
  },
  secondary: {
    color: Colors.light.primary["50"],
  },
  outline: {
    color: Colors.light.primary["950"],
  },
  danger: {
    color: Colors.light.primary["50"],
  },
});
