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
    const backgroundOpacity = interpolate(scrollY.value, [0, 50], [0, 1]);
    const shadowOpacity = interpolate(scrollY.value, [30, 50], [0, 0.2]);
    const elevation = interpolate(scrollY.value, [30, 50], [0, 4]);

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
            <MingCuteIcon name="mgc_location_fill" size={24} color={color} />
          )}
          variant="secondary"
          rounded={false}
        />
        <IconButton
          onPress={() => console.log("Clicked")}
          icon={(color) => (
            <MingCuteIcon
              name="mgc_notification_fill"
              size={24}
              color={color}
            />
          )}
          variant="secondary"
          rounded={false}
        />
      </View>
      <Image
        source={require("@/assets/images/Logo.svg")}
        style={{ width: 113, height: 44 }}
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
