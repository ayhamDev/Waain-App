import { Image } from "expo-image";
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
  return (
    <View style={[styles.container]}>
      <View style={{ marginTop: -50 }}>
        <Image
          source={require("@/assets/images/AuthPattern.svg")}
          contentFit="cover"
          contentPosition="center"
          style={styles.pattern}
          cachePolicy={"memory-disk"}
        />

        {header}
      </View>

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
