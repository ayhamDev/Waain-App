// AppHeader.tsx

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { IconButton } from "../ui/IconButton";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";
import { AppText } from "./AppText";

interface AppHeaderProps {
  stack?: boolean;
  title?: string;
  scrollY: SharedValue<number>;
}

const AppHeader = ({ stack = false, title, scrollY }: AppHeaderProps) => {
  const router = useRouter();
  const { theme } = useColorScheme();
  const animatedStyle = useAnimatedStyle(() => {
    // 1) background alpha: 0 → 1 as scroll moves from 0 → 30:
    const rawBg = interpolate(scrollY.value, [0, 30], [0, 1]);
    const bgAlpha = Math.max(rawBg, 0);

    // 2) borderWidth: 0 → 1 as scroll goes from 0 → 30:
    const rawBW = interpolate(scrollY.value, [0, 30], [0, 1]);
    const borderWidth = interpolate(scrollY.value, [0, 30], [0, 0.5]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${bgAlpha})`,
      borderBottomWidth: borderWidth, // ← animated from 0 → 1
    };
  }, [scrollY]);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.container,
        { borderColor: Colors[theme].secondary.default },
        animatedStyle,
      ]}
    >
      {stack ? (
        <IconButton
          rounded={false}
          icon={(color) => (
            <MingCuteIcon name="left_line" size={24} color={color} />
          )}
          onPress={() => router.back()}
        />
      ) : (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <IconButton
            onPress={() => router.push("/profile/address")}
            icon={(color) => (
              <MingCuteIcon name="location_fill" size={24} color={color} />
            )}
            rounded={false}
          />
          <IconButton
            onPress={() => router.push("/notification")}
            icon={(color) => (
              <MingCuteIcon name="notification_fill" size={24} color={color} />
            )}
            rounded={false}
          />
        </View>
      )}

      {!title ? (
        <Image
          source={require("@/assets/images/Logo.svg")}
          style={{ width: 113, height: 44 }}
          cachePolicy={"memory-disk"}
        />
      ) : (
        <AppText type="heading" style={{ textAlign: "right" }}>
          {title}
        </AppText>
      )}
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
    paddingTop: 5,
    boxSizing: "content-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 1000,
    // NOTE: We do NOT set borderWidth or borderColor here,
    // because we want Reanimated to drive those properties dynamically.
  },
});

export default AppHeader;
