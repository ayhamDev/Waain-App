import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const AppContainer = ({
  children,
  header,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Pattern.svg")}
        contentFit="cover"
        contentPosition="center"
        style={styles.pattern}
        cachePolicy={"memory-disk"}
      />

      {header}
      <ScrollView
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
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
    height: 300,
    zIndex: -1,
  },
  content: {
    paddingTop: 120,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

export default AppContainer;
