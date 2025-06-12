import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  FlatListProps,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface ParallaxScrollViewProps {
  headerHeight?: number;
  sticyHeaderHeight?: number;
  header: React.ReactNode;
  stickyHeader?: React.ReactNode;
  // Optional FlatList support
  data?: any[];
  renderItem?: FlatListProps<any>["renderItem"];
  keyExtractor?: FlatListProps<any>["keyExtractor"];
  // Children used when not using FlatList
  children?: React.ReactNode;
  // Style overrides
  containerStyle?: ViewStyle;
  headerContainerStyle?: ViewStyle;
  headerInnerStyle?: ViewStyle;
  stickyHeaderContainerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  flatListStyle?: ViewStyle;
}

export interface ParallaxScrollViewRef {
  /**
   * Scroll to a vertical offset (y).
   * If FlatList is used under the hood, uses scrollToOffset; otherwise uses ScrollView.scrollTo.
   */
  scrollTo: (options: { y: number; animated?: boolean }) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ParallaxScrollView = forwardRef<
  ParallaxScrollViewRef,
  ParallaxScrollViewProps
>((props, ref) => {
  const {
    headerHeight = 250,
    sticyHeaderHeight = 50,
    header,
    stickyHeader,
    data,
    renderItem,
    keyExtractor,
    children,
    containerStyle,
    headerContainerStyle,
    headerInnerStyle,
    stickyHeaderContainerStyle,
    contentContainerStyle,
    scrollViewStyle,
    flatListStyle,
  } = props;

  // Animated value
  const scrollY = useRef(new Animated.Value(0)).current;

  // Ref to inner ScrollView or FlatList
  const listRef = useRef<ScrollView | FlatList<any> | null>(null);

  // Expose scrollTo on the forwarded ref
  useImperativeHandle(
    ref,
    (): ParallaxScrollViewRef => ({
      scrollTo: ({ y, animated = true }) => {
        if (!listRef.current) return;
        // If it's a ScrollView
        if ("scrollTo" in listRef.current) {
          (listRef.current as ScrollView).scrollTo({ y, animated });
        }
        // If it's a FlatList
        else if ("scrollToOffset" in listRef.current) {
          (listRef.current as FlatList<any>).scrollToOffset({
            offset: y,
            animated,
          });
        }
      },
    }),
    []
  );

  // Interpolations
  const headerTranslate = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });
  const headerTranslateY = scrollY.interpolate({
    inputRange: [-headerHeight, 0, headerHeight],
    outputRange: [-headerHeight / 2, 0, headerHeight * 0.75],
    extrapolate: "clamp",
  });
  const headerScale = scrollY.interpolate({
    inputRange: [-headerHeight, 0, headerHeight],
    outputRange: [2, 1, 1],
    extrapolate: "clamp",
  });
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });
  const stickyOpacity = scrollY.interpolate({
    inputRange: [sticyHeaderHeight, headerHeight - sticyHeaderHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const stickyTranslateY = scrollY.interpolate({
    inputRange: [sticyHeaderHeight, headerHeight - sticyHeaderHeight],
    outputRange: [-sticyHeaderHeight, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Main Parallax Header Container */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.headerContainer,
          headerContainerStyle,
          {
            height: headerHeight,
            transform: [{ translateY: headerTranslate }],
            opacity: headerOpacity,
          },
        ]}
      >
        <Animated.View
          pointerEvents="none"
          style={[
            {
              width: SCREEN_WIDTH,
              height: headerHeight,
              transform: [
                { translateY: headerTranslateY },
                { scale: headerScale },
              ],
            },
            headerInnerStyle,
          ]}
        >
          {header}
        </Animated.View>
      </Animated.View>

      {/* Sticky Header appears once main header scrolls away */}
      {stickyHeader && (
        <Animated.View
          style={[
            styles.stickyHeader,
            stickyHeaderContainerStyle,
            { opacity: stickyOpacity },
            { transform: [{ translateY: stickyTranslateY }] },
          ]}
        >
          {stickyHeader}
        </Animated.View>
      )}

      {data && renderItem ? (
        <AnimatedFlatList
          ref={listRef as any}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor as any}
          contentContainerStyle={[
            { paddingTop: headerHeight },
            contentContainerStyle,
          ]}
          style={flatListStyle}
          scrollEventThrottle={16}
          bounces={true}
          overScrollMode={Platform.OS === "android" ? "always" : undefined}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        />
      ) : (
        <Animated.ScrollView
          ref={listRef as any}
          contentContainerStyle={[
            { paddingTop: headerHeight },
            contentContainerStyle,
          ]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
          scrollEventThrottle={16}
          bounces={true}
          overScrollMode={Platform.OS === "android" ? "always" : undefined}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {children}
        </Animated.ScrollView>
      )}
    </View>
  );
});

export default ParallaxScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 2,
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
});
