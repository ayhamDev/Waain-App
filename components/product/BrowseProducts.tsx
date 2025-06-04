// components/screens/BrowseProducts.tsx

import { AppHorizontalFlatList } from "@/components/global/AppHorizontalFlatList";
import { AppText } from "@/components/global/AppText";
import { useProductSheet } from "@/context/ProductSheet.context";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ProductCard } from "./ProductCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// 1) Calculate each card’s width and the spacing between them:
const ITEM_WIDTH = 150;
const ITEM_SPACING = 16;

// 2) Dummy data array with placeholder images and text:
const DUMMY_PRODUCTS = [
  {
    id: "1",
    imageUri: "https://placehold.co/500x500?text=Product+1",
    title: "تفاح طازج",
    subtitle: "1 كيلو",
    badgeText: "فواكة طازجة",
  },
  {
    id: "2",
    imageUri: "https://placehold.co/500x500?text=Product+2",
    title: "موز عضوي",
    subtitle: "1 باوند",
    badgeText: "عضوي",
  },
  {
    id: "3",
    imageUri: "https://placehold.co/500x500?text=Product+3",
    title: "برتقال شهي",
    subtitle: "2 كيلو",
    badgeText: "عصير طازج",
  },
  {
    id: "4",
    imageUri: "https://placehold.co/500x500?text=Product+4",
    title: "طماطم طازجة",
    subtitle: "500 غرام",
    badgeText: "خضار طازج",
  },
  {
    id: "5",
    imageUri: "https://placehold.co/500x500?text=Product+5",
    title: "خيار مقرمش",
    subtitle: "1 كيلو",
    badgeText: "خضار طازج",
  },
];

const BrowseProducts: React.FC = () => {
  const ProductSheet = useProductSheet();

  return (
    <View style={styles.container}>
      {/* Heading */}
      <AppText
        type="pageTitle"
        style={{ textAlign: "center", marginBottom: 10 }}
      >
        أحدث العروض
      </AppText>
      {/* Horizontal list of ProductCard */}
      <AppHorizontalFlatList<(typeof DUMMY_PRODUCTS)[0]>
        data={DUMMY_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            imageUri={item.imageUri}
            title={item.title}
            subtitle={item.subtitle}
            badgeText={item.badgeText}
            style={{ marginRight: ITEM_SPACING }}
            onPress={() => {
              ProductSheet.present();
              // Handle tap (e.g., navigate to a detail screen for `item.id`)
              console.log("Tapped product:", item.id);
            }}
          />
        )}
        itemWidth={ITEM_WIDTH}
        itemSpacing={ITEM_SPACING}
        // Center cards vertically inside the parent container
        contentContainerStyle={{
          alignItems: "center",
          height: 250,
        }}
      />
    </View>
  );
};

export default BrowseProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
