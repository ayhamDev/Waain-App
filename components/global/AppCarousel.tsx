// components/market/AppCarousel.tsx

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SharedValue, useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// 1) Define a type for each carousel item
interface MarketItem {
  id: string;
  title: string;
  image: any; // Replace `any` with a more specific type if you have one (e.g. ImageSourcePropType)
}

const data: MarketItem[] = [
  {
    id: "1",
    title: "Market 1",
    image: { uri: "https://placehold.co/2000x500?text=slide1" },
  },
  {
    id: "2",
    title: "Market 2",
    image: { uri: "https://placehold.co/500x500?text=slide2" },
  },
  {
    id: "3",
    title: "Market 3",
    image: { uri: "https://placehold.co/500x800?text=slide3" },
  },
  // …add as many items as you need
];

const AppCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // 2) Use React.ElementRef<typeof Carousel> instead of Carousel<MarketItem>
  const carouselRef = useRef<React.ElementRef<typeof Carousel>>(null);

  // Shared value to drive the pagination animation
  const progressValue: SharedValue<number> = useSharedValue(0);

  // 3) Explicitly type the `item` in renderItem to avoid “implicitly has an 'any' type”
  const renderItem = ({ item, index }: { item: MarketItem; index: number }) => {
    const { theme } = useColorScheme();
    return (
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: Colors[theme].background.default,
            marginHorizontal: 20,
            borderColor: Colors[theme].secondary.default,
            borderWidth: 1,
          },
        ]}
      >
        <Image
          source={item.image}
          style={styles.image}
          contentFit="cover"
          contentPosition={"center"}
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Carousel<MarketItem>
        ref={carouselRef}
        width={SCREEN_WIDTH} // (react-native-reanimated-carousel uses `width` and `height`)
        height={200}
        data={data}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
        scrollAnimationDuration={1000}
        autoPlay
        autoPlayInterval={2500}
        loop
      />

      {/* 
        4) Use Pagination.Basic, with `dotStyle` & `activeDotStyle` instead of `dotSize` / `dotSpacing`. 
        Refer to the official docs for the exact prop names: :contentReference[oaicite:1]{index=1} 
      */}
      <Pagination.Basic
        progress={progressValue}
        data={data}
        dotStyle={{
          width: 8, // e.g. 8 pixels wide
          height: 8, // 8 pixels tall
          borderRadius: 4, // make it circular
          backgroundColor: Colors.light.primary[50],
          borderColor: Colors.dark.primary[950],
          borderWidth: 0.5,
        }}
        activeDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: Colors.dark.primary[950],
        }}
        containerStyle={styles.paginationContainer}
        // (Optionally) add `onPress` to allow tapping on a dot to jump:
        onPress={(index: number) => {
          carouselRef.current?.scrollTo({
            count: index - progressValue.value,
            animated: true,
          });
        }}
      />
    </View>
  );
};

export default AppCarousel;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  paginationContainer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    gap: 5,
  },
});
