// components/market/BrowseMarkets.tsx

import { Image } from "expo-image";
import React from "react";
import { Dimensions, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { AppHorizontalFlatList } from "../global/AppHorizontalFlatList";
import { AppText } from "../global/AppText";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// 1) Define the shape of each item
interface PlaceholderItem {
  id: string;
  image: string;
}

// 2) Create an array of dummy items using placehold.co URLs
const DUMMY_IMAGES: PlaceholderItem[] = [
  { id: "1", image: "https://placehold.co/600x400?text=Market+1" },
  { id: "2", image: "https://placehold.co/600x400?text=Market+2" },
  { id: "3", image: "https://placehold.co/600x400?text=Market+3" },
  { id: "4", image: "https://placehold.co/600x400?text=Market+4" },
  { id: "5", image: "https://placehold.co/600x400?text=Market+5" },
];

export const BrowseMarkets: React.FC = () => {
  // 3) Choose an itemWidth—here we use 80% of screen width for each image card
  const ITEM_WIDTH = SCREEN_WIDTH * 0.5;

  /**
   * 4) The renderItem function will receive each PlaceholderItem and render an <Image>
   */
  const renderPlaceholder = ({ item }: ListRenderItemInfo<PlaceholderItem>) => {
    return (
      <View style={[styles.cardContainer, { width: ITEM_WIDTH }]}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          contentFit="cover"
          contentPosition={"center"}
        />
      </View>
    );
  };

  return (
    <View>
      <AppText
        type="pageTitle"
        style={{ textAlign: "center", marginBottom: 10 }}
      >
        تصفح سوق السوبرماركت
      </AppText>
      <AppHorizontalFlatList<PlaceholderItem>
        data={DUMMY_IMAGES}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaceholder}
        itemWidth={ITEM_WIDTH}
        // Optional: add left padding so the first card isn't flush to the edge
        contentContainerStyle={{
          paddingLeft: 16,
          paddingRight: 16,
          alignItems: "center",
        }}
        // You can also pass any other FlatListProps (e.g. onEndReached, ListFooterComponent, etc.)
        ListFooterComponent={<View style={{ width: 16 }} />}
      />
    </View>
  );
};

export default BrowseMarkets;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 16,
    marginBottom: 12,
  },
  cardContainer: {
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12, // spacing between cards
  },
  image: {
    width: "100%",
    height: 100, // fixed height for each placeholder image
  },
});
