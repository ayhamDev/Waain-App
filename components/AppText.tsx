import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";

export type AppTextProps = TextProps & {
  type?:
    | "default" // Paragraph
    | "defaultBold" // Buttons / Tabs / Inputs
    | "secondary" // Paragraph Secondary
    | "listTitle" // List Titles
    | "pageTitle" // Page Title
    | "heading" // Heading (largest, optional use)
    | "link";
};

export function AppText({ style, type = "default", ...rest }: AppTextProps) {
  const { theme } = useColorScheme();
  const color =
    type === "link"
      ? Colors[theme].tint
      : type === "secondary"
      ? "#8E8E8E"
      : Colors[theme].text;

  return (
    <Text
      style={[
        { color },
        type === "default" && styles.default,
        type === "defaultBold" && styles.defaultBold,
        type === "secondary" && styles.secondary,
        type === "listTitle" && styles.listTitle,
        type === "pageTitle" && styles.pageTitle,
        type === "heading" && styles.heading,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  defaultBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  secondary: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  listTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
  },
  pageTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
  },
  heading: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
  },
  link: {
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
