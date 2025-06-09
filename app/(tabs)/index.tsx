"use client";

import AppCarousel from "@/components/global/AppCarousel";
import AppScreen from "@/components/global/AppScreen";
import BrowseMarkets from "@/components/market/BrowseMarkets";
import BrowseProducts from "@/components/product/BrowseProducts";
import { MingCuteIconsMap } from "@/components/ui/MingCute/MingCuteIcon";
import { router } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
export default function ProfileScreen() {
  const settingsOptions = useMemo(
    () =>
      [
        {
          title: "السوبرماركت المفضل",
          content: "بن داود",
          iconName: "shopping_cart_1_fill",
          onPress: () => router.push("/profile/store"),
        },
        {
          title: "المفضلة",
          content: "12 منتجات",
          iconName: "heart_fill",
          onPress: () => router.push("/profile/favourite"),
        },
        {
          title: "سجل المشتريات",
          content: "12 منتجات",
          iconName: "history_2_fill",
          onPress: () => router.push("/profile/history"),
        },
        {
          title: "العناوين",
          content: "4 عناوين",
          iconName: "location_fill",
          onPress: () => router.push("/profile/address"),
        },
        {
          title: "اللغة",
          content: "عربي",
          iconName: "translate_2_fill",
          onPress: () => SheetManager.show("Language-sheet"),
        },
        {
          title: "رفع بلاغ",
          content: "0 بلاغات تحت المراجعة",
          iconName: "alert_diamond_fill",
        },
      ] as {
        title: string;
        content: string;
        iconName: keyof typeof MingCuteIconsMap;
        onPress: () => void;
      }[],
    []
  );

  return (
    <AppScreen
      contentStyle={{
        paddingHorizontal: 0,
      }}
    >
      <View style={{ gap: 24 }}>
        <AppCarousel />
        {/* <BrowseCategories /> */}
        <BrowseMarkets />
        <BrowseProducts />
      </View>
      {/* Sheets */}
    </AppScreen>
  );
}
