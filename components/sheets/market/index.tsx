import AppSheetHeader from "@/components/global/AppSheetHeader";
import { AppView } from "@/components/global/AppView";
import FavMarket from "@/components/market/FavMarket";
import { AppButton } from "@/components/ui/Button";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import AppSheet from "../AppSheet";

const MarketSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  // Define snap points for the bottom sheet

  const dummyStats = [
    {
      id: "1",
      number: 4,
      imageUri: "https://placehold.co/120x50?text=market1",
    },
    {
      id: "2",
      number: 12,
      imageUri: "https://placehold.co/120x50?text=market2",
    },
    {
      id: "3",
      number: 98,
      imageUri: "https://placehold.co/120x50?text=market3",
    },
    {
      id: "4",
      number: 4,
      imageUri: "https://placehold.co/120x50?text=market1",
    },
    {
      id: "5",
      number: 12,
      imageUri: "https://placehold.co/120x50?text=market2",
    },
    {
      id: "6",
      number: 98,
      imageUri: "https://placehold.co/120x50?text=market3",
    },
  ];
  // Backdrop component

  const snapPoints = useMemo(() => ["90%"], []);

  return (
    <AppSheet ref={ref} enableDynamicSizing={false} snapPoints={snapPoints}>
      <AppSheetHeader title="اختار السوبرماركت" />
      <BottomSheetScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
        contentContainerStyle={{ minHeight: 200 }}
      >
        <AppView style={{ padding: 20, width: "100%", gap: 24 }}>
          {dummyStats.map((item) => (
            <FavMarket
              key={item.id}
              number={item.number}
              imageUri={item.imageUri}
            />
          ))}
        </AppView>
      </BottomSheetScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderTopColor: Colors[theme].secondary.default,
          borderTopWidth: 0.5,
        }}
      >
        <AppButton title="متابعة" variant="secondary" />
      </View>
    </AppSheet>
  );
});

const styles = StyleSheet.create({
  sheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
  },
  indicator: {
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 4,
  },
});

MarketSheet.displayName = "MarketSheet";

export default MarketSheet;
