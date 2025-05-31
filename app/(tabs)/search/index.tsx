"use client";

import AppContainer from "@/components/global/AppContainer";
import SearchHeader from "@/components/global/SearchHeader";
import BrowseMarkets from "@/components/market/BrowseMarkets";
import BrowseProducts from "@/components/product/BrowseProducts";
import { useRef } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

export default function SearchScreen() {
  const inputRef = useRef<TextInput>(null);
  const scrollY = useSharedValue(0);

  return (
    <AppContainer
      contentStyle={{
        paddingHorizontal: 0,
        gap: 24,
      }}
      scrollY={scrollY}
      header={<SearchHeader scrollY={scrollY} stack={false} />}
    >
      <BrowseMarkets />
      <BrowseProducts />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
