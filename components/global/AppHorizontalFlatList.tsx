// components/global/AppHorizontalFlatList.tsx

import React from "react";
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  StyleSheet,
  ViewStyle,
} from "react-native";

export interface AppHorizontalFlatListProps<T>
  extends Omit<
    FlatListProps<T>,
    | "horizontal"
    | "data"
    | "renderItem"
    | "keyExtractor"
    | "getItemLayout"
    | "decelerationRate"
    | "snapToAlignment"
    | "scrollEventThrottle"
  > {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem: (info: ListRenderItemInfo<T>) => React.ReactElement | null;

  /**
   * Width of each item/card.
   * Required to enable snapping.
   */
  itemWidth?: number;

  /**
   * Space (in px) between items horizontally.
   * Defaults to 12. Used to calculate snapToInterval.
   */
  itemSpacing?: number;

  /**
   * Style for the FlatList content container.
   * Useful for adjusting paddingLeft/paddingRight or adding custom paddingVertical.
   */
  contentContainerStyle?: ViewStyle;
}

export function AppHorizontalFlatList<T>(props: AppHorizontalFlatListProps<T>) {
  const {
    data,
    keyExtractor,
    renderItem,
    itemWidth,
    itemSpacing = 12,
    contentContainerStyle,
    snapToInterval,
    ...rest
  } = props;

  // Only valid if itemWidth is a number
  const hasValidWidth = typeof itemWidth === "number";

  // getItemLayout: improves performance and helps with correct scroll positioning
  const getItemLayout = hasValidWidth
    ? (
        data: ArrayLike<T> | null | undefined,
        index: number
      ): { length: number; offset: number; index: number } => ({
        length: itemWidth,
        offset: (itemWidth + itemSpacing) * index,
        index,
      })
    : undefined;

  // snapToInterval: itemWidth + spacing between items
  const snapInterval = snapToInterval
    ? snapToInterval
    : hasValidWidth
    ? itemWidth + itemSpacing
    : undefined;

  // We'll give half of itemSpacing as vertical padding so content isn't clipped.
  const verticalPadding = itemSpacing / 2;

  return (
    <FlatList<T>
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal={true} // Always horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        {
          // Add side padding so first/last item isn't flush
          paddingLeft: hasValidWidth ? itemSpacing : 0,
          paddingRight: hasValidWidth ? itemSpacing : 0,
          // Add vertical padding so items do not get cut off at top/bottom
          paddingVertical: verticalPadding,
        },
        styles.content,
        contentContainerStyle,
      ]}
      bounces={true}
      bouncesZoom={true}
      getItemLayout={getItemLayout}
      snapToInterval={snapInterval} // Snap to each item + spacing
      snapToAlignment="start" // Align each snapped item to the left edge
      decelerationRate={hasValidWidth ? "fast" : undefined}
      scrollEventThrottle={16} // Good frequency for scroll events (16ms)
      {...(rest as Omit<
        FlatListProps<T>,
        | "horizontal"
        | "data"
        | "renderItem"
        | "keyExtractor"
        | "getItemLayout"
        | "snapToInterval"
        | "decelerationRate"
        | "snapToAlignment"
        | "scrollEventThrottle"
      >)}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    // No default vertical padding here; we calculate it above based on itemSpacing.
  },
});
