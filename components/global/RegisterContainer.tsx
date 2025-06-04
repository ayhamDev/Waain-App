import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

const AuthContainer = ({
  children,
  header,
  scroll = true,
  contentStyle,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
  scroll?: boolean;
  contentStyle?: ViewStyle;
}) => {
  const { theme } = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor: Colors[theme].secondary.default,
          borderTopWidth: 0.5,
          elevation: 1,
        },
      ]}
    >
      {scroll ? (
        <ScrollView
          contentContainerStyle={[styles.content, contentStyle]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, contentStyle]}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    zIndex: 0,
  },
  pattern: {
    position: "absolute",
    top: 25,
    width: "100%",
    height: 220,
    zIndex: -1,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

export default AuthContainer;
