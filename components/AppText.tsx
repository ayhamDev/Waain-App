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
    fontFamily: "Cairo-Regular",
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Cairo-Medium",
  },
  secondary: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "Cairo-Regular",
  },
  listTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "Cairo-Medium",
  },
  pageTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Cairo-Medium",
  },
  heading: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: "Cairo-Bold",
  },
  link: {
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: "underline",
    fontFamily: "Cairo-Regular",
  },
});
