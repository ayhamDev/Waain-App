import { Colors } from "@/constants/Styles";
import RNBounceable from "@freakycoder/react-native-bounceable";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  startComponent?: (color: string) => React.ReactNode;
  endComponent?: (color: string) => React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
  startComponent,
  endComponent,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  const buttonStyles = [
    styles.base,
    variantStyles[variant],
    isDisabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    variantTextStyles[variant],
    isDisabled && styles.textDisabled,
    textStyle,
  ];

  const iconColor =
    variantTextStyles[variant]?.color || Colors.light.primary.default;

  const Content = () => (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator color={iconColor} />
      ) : (
        <>
          {startComponent && (
            <View style={styles.icon}>{startComponent(iconColor)}</View>
          )}
          <Text style={textStyles}>{title}</Text>
          {endComponent && (
            <View style={styles.icon}>{endComponent(iconColor)}</View>
          )}
        </>
      )}
    </View>
  );

  return (
    <RNBounceable
      bounceEffectIn={0.85}
      onPress={onPress}
      disabled={isDisabled}
      style={buttonStyles}
    >
      <Content />
    </RNBounceable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: {
    marginHorizontal: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: "Cairo-Bold",
  },
  disabled: {
    opacity: 0.6,
  },
  textDisabled: {
    color: "#aaa",
  },
});
const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.light.primary["300"], // Use your primary color
  },
  secondary: {
    backgroundColor: Colors.light.primary["950"],
  },
  outline: {
    borderWidth: 1,
    borderColor: Colors.light.primary["950"],
    backgroundColor: Colors.light.background.default,
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
});
