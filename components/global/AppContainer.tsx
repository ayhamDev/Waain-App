import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

const AppContainer = ({
  children,
  header,
  scroll = true,
  contentStyle,
  scrollY,
}: {
  children?: React.ReactNode;
  header: React.ReactNode;
  scroll?: boolean;
  contentStyle?: ViewStyle;
  scrollY: SharedValue<number>;
}) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <View style={[styles.container]}>
      <Image
        source={require("@/assets/images/Pattern.svg")}
        contentFit="cover"
        contentPosition="center"
        style={styles.pattern}
        cachePolicy={"memory-disk"}
      />

      {header}
      {scroll ? (
        <Animated.ScrollView
          contentContainerStyle={[styles.content, contentStyle]}
          onScroll={scrollHandler}
          scrollEventThrottle={20}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </Animated.ScrollView>
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
    top: -25,
    width: "100%",
    height: 300,
    zIndex: -1,
  },
  content: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

export default AppContainer;
