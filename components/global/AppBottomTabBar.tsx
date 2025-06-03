import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors, ThemeStyles } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const TAB_ROUTES = [
  { name: "index", iconFill: "home_4_fill", iconLine: "home_4_line" },
  {
    name: "search/index",
    iconFill: "search_fill",
    iconLine: "search_line",
  },
  {
    name: "cart/index",
    iconFill: "shopping_cart_1_fill",
    iconLine: "shopping_cart_1_line",
  },
  {
    name: "profile/index",
    iconFill: "user_2_fill",
    iconLine: "user_2_line",
  },
] as const;

type MyTabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
  const { theme } = useColorScheme();

  // current selected index
  const currentIndex = state.index;

  // animated value for indicator X translation
  const translateX = useRef(new Animated.Value(0)).current;

  // store each tab's measurement in state to trigger re-render
  const [layouts, setLayouts] = useState<{ x: number; width: number }[]>([]);

  // animate indicator whenever index or layouts change
  useEffect(() => {
    const layout = layouts[currentIndex];
    if (layout) {
      Animated.spring(translateX, {
        toValue: layout.x + 10,
        useNativeDriver: true,
        stiffness: 220,
        damping: 100,
        mass: 1,
      }).start();
    }
  }, [currentIndex, layouts, translateX]);

  const onTabPress = (
    index: number,
    routeName: string,
    key: string,
    params: any
  ) => {
    const event = navigation.emit({
      type: "tabPress",
      target: key,
      canPreventDefault: true,
    });
    if (currentIndex !== index && !event.defaultPrevented) {
      navigation.navigate(routeName, params);
    }
  };

  const onTabLongPress = (key: string) => {
    navigation.emit({ type: "tabLongPress", target: key });
  };

  const onTabLayout = (index: number) => (e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    setLayouts((prev) => {
      const next = [...prev];
      next[index] = { x, width };
      return next;
    });
  };

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          backgroundColor: Colors[theme].background.default,
          borderTopColor: Colors[theme].secondary.default,
          borderTopWidth: 0.75,
        },
      ]}
    >
      {/* Animated Indicator */}
      {layouts[currentIndex] && (
        <Animated.View
          style={[
            styles.animatedIndicator,
            {
              width: layouts[currentIndex].width - 20,
              transform: [{ translateX }],
              backgroundColor: Colors[theme].primary[300],
              borderRadius: ThemeStyles.borderRadus.default,
            },
          ]}
        />
      )}

      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = currentIndex === index;
        const iconDef = TAB_ROUTES.find((r) => r.name === route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() =>
              onTabPress(index, route.name, route.key, route.params)
            }
            onLongPress={() => onTabLongPress(route.key)}
            style={styles.tabButton}
            onLayout={onTabLayout(index)}
          >
            {iconDef ? (
              <MingCuteIcon
                size={28}
                name={isFocused ? iconDef.iconFill : iconDef.iconLine}
                color={Colors[theme].primary["950"]}
              />
            ) : (
              <Text
                style={{
                  color: isFocused
                    ? Colors[theme].primary["800"]
                    : Colors[theme].primary["950"],
                }}
              >
                {options.tabBarLabel ?? options.title ?? route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "white",
          flex: 1,
        },
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      {TAB_ROUTES.map(({ name }) => (
        <Tabs.Screen key={name} name={name} />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  animatedIndicator: {
    position: "absolute",
    height: 40,
    bottom: 15,
  },
  tabButton: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
