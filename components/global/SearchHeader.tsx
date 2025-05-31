// AppHeader.tsx

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import TextInputField from "../ui/Input";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

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
  const inputRef = useRef<TextInput>(null);
  useFocusEffect(() => {
    const timeout = setTimeout(() => {
      if (!inputRef?.current?.isFocused()) {
        inputRef?.current?.focus();
      }
    }, 300); // Android sometimes needs a delay
    return () => clearTimeout(timeout);
  });
  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.container,
        { borderColor: Colors[theme].secondary.default },
        animatedStyle,
      ]}
    >
      <TextInputField
        startComponent={({ color }) => (
          <MingCuteIcon size={22} name="search_line" color={color} />
        )}
        ref={inputRef}
        placeholder="Search..."
        style={{ flex: 1 }}
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
