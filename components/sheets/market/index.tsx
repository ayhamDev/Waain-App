import AppSheetHeader from "@/components/global/AppSheetHeader";
import { AppView } from "@/components/global/AppView";
import FavMarket from "@/components/market/FavMarket";
import { AppButton } from "@/components/ui/Button";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import type { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetModal,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useEffect, useMemo } from "react";
import { BackHandler, StyleSheet, View } from "react-native";

const MarketSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  // Define snap points for the bottom sheet
  const { dismiss } = useBottomSheetModal();
  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    return () => {
      subscription.remove();
    };
  }, []);
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
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    []
  );
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 20, // higher = less bouncy, more smooth
    overshootClamping: false, // allows gentle bounce
    restDisplacementThreshold: 0.5,
    restSpeedThreshold: 0.5,
    stiffness: 150, // lower = smoother & slower
  });
  const snapPoints = useMemo(() => ["25%", "90%"], []);

  return (
    <BottomSheetModal
      ref={ref}
      animationConfigs={animationConfigs}
      enablePanDownToClose={true}
      backgroundStyle={styles.sheetContainer}
      handleIndicatorStyle={styles.indicator}
      enableDynamicSizing={false}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <AppSheetHeader title="اختار السوبرماركت" />
      <BottomSheetScrollView
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
    </BottomSheetModal>
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
