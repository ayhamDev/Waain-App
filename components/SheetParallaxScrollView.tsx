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

import {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

interface SheetParallaxScrollViewProps {
  headerHeight?: number;
  sticyHeaderHeight?: number;
  header: React.ReactNode;
  stickyHeader?: React.ReactNode;
  data?: any[];
  renderItem?: FlatListProps<any>["renderItem"];
  keyExtractor?: FlatListProps<any>["keyExtractor"];
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  headerContainerStyle?: ViewStyle;
  headerInnerStyle?: ViewStyle;
  stickyHeaderContainerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  flatListStyle?: ViewStyle;
  // New prop to control how much of the header remains visible
  minimumHeaderHeight?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

///////////////////////////////////////////////////////////////////
// Step 1: Wrap BottomSheetFlatList / BottomSheetScrollView in Animated
// but cast them to `any` so that TS won't complain about `scrollEventThrottle`.
///////////////////////////////////////////////////////////////////
const AnimatedBottomSheetFlatList = Animated.createAnimatedComponent(
  BottomSheetFlatList
) as React.ComponentType<any>;

const AnimatedBottomSheetScrollView = Animated.createAnimatedComponent(
  BottomSheetScrollView
) as React.ComponentType<any>;

const SheetParallaxScrollView = forwardRef<any, SheetParallaxScrollViewProps>(
  (props, ref) => {
    const {
      headerHeight = 250,
      sticyHeaderHeight = 50,
      minimumHeaderHeight = 100, // Default to 100px remaining visible
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

    // Shared animated value
    const scrollY = useRef(new Animated.Value(0)).current;

    // We want to forward scroll methods (`scrollTo`, etc.) to the inner list/scrollview
    const listRef = useRef<FlatList | ScrollView>(null);
    useImperativeHandle(ref, () => ({
      scrollTo: (options: { y: number; animated?: boolean }) => {
        if (listRef.current && "scrollTo" in listRef.current) {
          // This covers the ScrollView case
          (listRef.current as ScrollView).scrollTo(options);
        } else if (listRef.current && "scrollToOffset" in listRef.current) {
          // This covers the FlatList case
          (listRef.current as FlatList).scrollToOffset(options as any);
        }
      },
    }));

    // Calculate the maximum translation (how much the header can move up)
    const maxTranslation = headerHeight - minimumHeaderHeight;

    // Compute all our interpolations for the parallax header
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, maxTranslation],
      outputRange: [0, -maxTranslation],
      extrapolate: "clamp",
    });
    const headerTranslateY = scrollY.interpolate({
      inputRange: [-headerHeight, 0, maxTranslation],
      outputRange: [-headerHeight / 2, 0, maxTranslation * 0.75],
      extrapolate: "clamp",
    });
    const headerScale = scrollY.interpolate({
      inputRange: [-headerHeight, 0, maxTranslation],
      outputRange: [2, 1, 1],
      extrapolate: "clamp",
    });
    // Modified opacity to fade out more gradually and not completely disappear

    const stickyOpacity = scrollY.interpolate({
      inputRange: [sticyHeaderHeight, maxTranslation - sticyHeaderHeight],
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
        {/* Parallax Header */}
        <Animated.View
          pointerEvents="none"
          style={[
            styles.headerContainer,
            headerContainerStyle,
            {
              height: headerHeight,
              transform: [{ translateY: headerTranslate }],
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

        {/* Sticky Header */}
        {stickyHeader && (
          <Animated.View
            style={[
              styles.stickyHeader,
              stickyHeaderContainerStyle,
              { opacity: stickyOpacity },
              {
                transform: [{ translateY: stickyTranslateY }],
              },
            ]}
          >
            {stickyHeader}
          </Animated.View>
        )}

        {/* 
          If `data` + `renderItem` are provided, use AnimatedBottomSheetFlatList.
          Otherwise, fall back to AnimatedBottomSheetScrollView.
        */}
        {data && renderItem ? (
          <AnimatedBottomSheetFlatList
            ref={listRef as any}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor as any}
            contentContainerStyle={[
              { paddingTop: headerHeight },
              contentContainerStyle,
            ]}
            style={flatListStyle}
            // ───────────────────────────────────────────────
            // We cast to `any` so TS will allow scrollEventThrottle / onScroll here:
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            bounces={true}
            overScrollMode={Platform.OS === "android" ? "always" : undefined}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <AnimatedBottomSheetScrollView
            ref={listRef as any}
            contentContainerStyle={[
              { paddingTop: headerHeight },
              contentContainerStyle,
            ]}
            style={scrollViewStyle}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            bounces={true}
            overScrollMode={Platform.OS === "android" ? "always" : undefined}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </AnimatedBottomSheetScrollView>
        )}
      </View>
    );
  }
);

export default SheetParallaxScrollView;

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
    zIndex: 2, // ensure it's above the list
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3, // ensure it's above the header
  },
});
