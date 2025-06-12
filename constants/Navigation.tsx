import {
  StackCardInterpolationProps,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Easing } from "react-native";

// Custom spring config for iOS-like transitions
const springConfig = {
  stiffness: 1000,
  damping: 500,
  mass: 3,
  overshootClamping: true,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
};

// iOS-like transition configuration using spring
export const iosTransitionConfig = {
  open: {
    animation: "spring" as const,
    config: springConfig,
  },
  close: {
    animation: "spring" as const,
    config: springConfig,
  },
};

// Alternative timing-based configuration that closely matches iOS
export const iosTimingConfig = {
  open: {
    animation: "timing" as const,
    config: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
    },
  },
  close: {
    animation: "timing" as const,
    config: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
    },
  },
};

// Custom slide transition for stack navigator
type CardInterpolator = StackCardInterpolationProps;
export const slideFromRightIOS: Pick<
  StackNavigationOptions,
  "cardStyleInterpolator"
> = {
  cardStyleInterpolator: ({ current, layouts }: CardInterpolator) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

// Custom slide transition with shadow (more iOS-like)
export const slideFromRightIOSWithShadow: Pick<
  StackNavigationOptions,
  "cardStyleInterpolator"
> = {
  cardStyleInterpolator: ({ current, layouts }: CardInterpolator) => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    const shadowOpacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.3],
    });

    return {
      cardStyle: {
        transform: [{ translateX }],
        shadowColor: "#000",
        shadowOffset: {
          width: -5,
          height: 0,
        },
        shadowOpacity,
        shadowRadius: 10,
        elevation: 5,
      },
    };
  },
};

// Gesture configuration for iOS-like swipe back
type GestureConfig = Pick<
  StackNavigationOptions,
  "gestureEnabled" | "gestureDirection" | "gestureResponseDistance"
>;
export const iosGestureConfig: GestureConfig = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  // gestureResponseDistance expects a number for @react-navigation/stack typings
  gestureResponseDistance: 25,
};

// Example usage in navigator:
// <Stack.Navigator
//   screenOptions={{
//     gestureEnabled: iosGestureConfig.gestureEnabled,
//     gestureDirection: iosGestureConfig.gestureDirection,
//     gestureResponseDistance: iosGestureConfig.gestureResponseDistance,
//     transitionSpec: iosTransitionConfig, // or iosTimingConfig
//     ...slideFromRightIOS,
//   }}
// >
