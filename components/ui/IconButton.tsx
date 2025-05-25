import { Colors } from "@/constants/Styles";
import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon: (color: string) => React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  size?: number;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "outline";
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
    variantTextStyles[variant]?.color ||
    (variant === "outline" ? Colors.light.primary : "#fff");

  const content = loading ? (
    <ActivityIndicator size="small" color={iconColor} />
  ) : (
    icon(iconColor)
  );

  if (Platform.OS === "android") {
    return (
      <View style={[...buttonStyles, { overflow: "hidden" }]}>
        <Pressable
          android_ripple={{ color: Colors.light.secondary }}
          onPress={onPress}
          disabled={isDisabled}
          style={StyleSheet.absoluteFill}
        >
          <View style={styles.center}>{content}</View>
        </Pressable>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
      style={buttonStyles}
    >
      <View style={styles.center}>{content}</View>
    </TouchableOpacity>
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
    backgroundColor: Colors.light.button,
  },
  secondary: {
    backgroundColor: Colors.light.primary,
  },
  outline: {
    borderWidth: 1,
    borderColor: Colors.light.secondary,
    backgroundColor: "#fff",
  },
});

const variantTextStyles = StyleSheet.create({
  primary: {
    color: "#fff",
  },
  secondary: {
    color: Colors.light.text,
  },
  outline: {
    color: Colors.light.text,
  },
});
