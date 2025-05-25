import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors, ThemeStyles } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
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
  { name: "index", iconFill: "mgc_home_4_fill", iconLine: "mgc_home_4_line" },
  {
    name: "search/index",
    iconFill: "mgc_search_fill",
    iconLine: "mgc_search_line",
  },
  {
    name: "cart/index",
    iconFill: "mgc_shopping_cart_1_fill",
    iconLine: "mgc_shopping_cart_1_line",
  },
  {
    name: "profile/index",
    iconFill: "mgc_user_2_fill",
    iconLine: "mgc_user_2_line",
  },
] as const;

type MyTabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
  const { buildHref } = useLinkBuilder();
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
        damping: 20,
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
          backgroundColor: Colors[theme].background,
          borderTopColor: Colors[theme].secondary,
          borderTopWidth: 0.19,
          marginBottom: 5,
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
              backgroundColor: Colors[theme].tint,
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
                color={Colors[theme].icon}
              />
            ) : (
              <Text
                style={{
                  color: isFocused ? Colors[theme].tint : Colors[theme].icon,
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
      screenOptions={{ headerShown: false }}
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
