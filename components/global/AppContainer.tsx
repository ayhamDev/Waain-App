import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

const AppContainer = ({
  children,
  header,
  scrollY,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  scrollY: Animated.SharedValue<number>;
}) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Pattern.svg")}
        contentFit="cover"
        contentPosition="center"
        style={styles.pattern}
      />
      {header}
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  pattern: {
    position: "absolute",
    top: 20,
    width: "100%",
    height: 300,
    zIndex: -1,
  },
  content: {
    paddingTop: 120,
    paddingBottom: 20,
  },
});

export default AppContainer;
