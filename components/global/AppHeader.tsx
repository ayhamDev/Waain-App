import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { IconButton } from "../ui/IconButton";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface AppHeaderProps {
  scrollY: Animated.SharedValue<number>;
}

const AppHeader = ({ scrollY }: AppHeaderProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rawOpacity = interpolate(scrollY.value, [0, 50], [0, 1]);
    const backgroundOpacity = Math.max(rawOpacity, 0); // minimum opacity
    const shadowOpacity = interpolate(scrollY.value, [20, 50], [0, 0.2]);
    const elevation = interpolate(scrollY.value, [20, 50], [0, 4]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
      shadowOpacity,
      elevation,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <IconButton
          onPress={() => console.log("Clicked")}
          icon={(color) => (
            <MingCuteIcon name="location_fill" size={24} color={color} />
          )}
          rounded={false}
        />
        <IconButton
          onPress={() => console.log("Clicked")}
          icon={(color) => (
            <MingCuteIcon name="notification_fill" size={24} color={color} />
          )}
          rounded={false}
        />
      </View>
      <Image
        source={require("@/assets/images/Logo.svg")}
        style={{ width: 113, height: 44 }}
        cachePolicy={"memory-disk"}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingTop: 40,
    boxSizing: "content-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    zIndex: 1000,
  },
});

export default AppHeader;
