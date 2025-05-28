import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, ViewProps } from "react-native";

export const AppSeperator = ({ style, ...props }: ViewProps) => {
  const { theme } = useColorScheme();
  return (
    <View
      style={[
        {
          height: 1,
          width: "100%",
          backgroundColor: Colors[theme].secondary.default,
        },
        style,
      ]}
      {...props}
    ></View>
  );
};
