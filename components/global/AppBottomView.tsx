import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useEffect } from "react";
import { ViewProps, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface AppBottomViewProps extends ViewProps {
  children: React.ReactNode;
}

const AppBottomView: React.FC<AppBottomViewProps> = ({
  children,
  style,
  ...rest
}) => {
  const { theme } = useColorScheme(); // should return "light" | "dark"
  const translateY = useSharedValue(150);

  useEffect(() => {
    let animateRef = setTimeout(() => {
      translateY.value = withSpring(70, {
        damping: 5,
        stiffness: 75,
      });
    }, 300);
    return () => {
      clearTimeout(animateRef);
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[styles.container(Colors[theme]), animatedStyle, style]}
      {...rest}
    >
      {children}
    </Animated.View>
  );
};

const styles = {
  container: (colors: (typeof Colors)["light"]): ViewStyle => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 24,

    paddingBottom: 80,
    paddingHorizontal: 24,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: colors.background.default,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderColor: colors.secondary.default,
    borderWidth: 1,
  }),
};

export default AppBottomView;
