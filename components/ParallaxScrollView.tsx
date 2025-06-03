import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  FlatListProps,
  Platform,
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

const { width: SCREEN_WIDTH } = Dimensions.get("window");

function ParallaxScrollView(props: ParallaxScrollViewProps) {
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

  const scrollY = useRef(new Animated.Value(0)).current;

  // Translate header container up as user scrolls down
  const headerTranslate = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  // Parallax translate and scale for header content
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

  // Fade out main header as user scrolls past half the height
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });

  // Fade in sticky header so it's fully opaque when scrolled past main header
  const stickyOpacity = scrollY.interpolate({
    inputRange: [sticyHeaderHeight, headerHeight - sticyHeaderHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Main Parallax Header Container */}
      <Animated.View
        pointerEvents={"none"}
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
          pointerEvents={"none"}
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
          ]}
        >
          {stickyHeader}
        </Animated.View>
      )}

      {data && renderItem ? (
        <AnimatedFlatList
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
}

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
    zIndex: 2, // ensure header is above the list
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3, // above header
  },
});
