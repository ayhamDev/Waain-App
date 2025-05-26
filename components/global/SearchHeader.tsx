import React, { forwardRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import TextInputField from "../ui/Input";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface SearchHeaderProps {
  scrollY: Animated.SharedValue<number>;
}

const SearchHeader = forwardRef<TextInput, SearchHeaderProps>(
  ({ scrollY }, ref) => {
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
        <TextInputField
          ref={ref}
          startComponent={({ color }) => (
            <MingCuteIcon size={22} name="search_line" color={color} />
          )}
          placeholder="Search..."
          style={{ flex: 1 }}
        />
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingTop: 50,
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

export default SearchHeader;
