import AppBadge from "@/components/global/AppBadge";
import AppBottomView from "@/components/global/AppBottomView";
import { AppText } from "@/components/global/AppText";
import FavMarket from "@/components/market/FavMarket";
import SheetParallaxScrollView from "@/components/SheetParallaxScrollView";
import { AppButton } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React, { forwardRef, useMemo, useRef } from "react";
import { View } from "react-native";
import AppSheet from "../AppSheet";
import PriceComparisonSheet from "./PriceComparisonSheet";

// Updated ProductSheet with price comparison integration
const ProductSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  const { dismiss } = useBottomSheetModal();
  const snapPoints = useMemo(() => ["90%"], []);

  // Add ref for price comparison sheet
  const priceComparisonRef = useRef<BottomSheetModal>(null);

  const handlePriceComparison = () => {
    priceComparisonRef.current?.present();
  };

  return (
    <>
      <AppSheet ref={ref} enableDynamicSizing={false} snapPoints={snapPoints}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            position: "absolute",
            backgroundColor: Colors[theme].background.default,
            paddingBottom: 10,
            borderBottomColor: Colors[theme].secondary.default,
            borderBottomWidth: 0.5,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9,
          }}
        >
          <IconButton
            rounded={false}
            icon={(color) => (
              <MingCuteIcon name="left_line" size={24} color={color} />
            )}
            onPress={() => dismiss()}
          />
          <IconButton
            variant="outline"
            rounded={false}
            icon={(color) => (
              <MingCuteIcon name="heart_line" size={24} color={color} />
            )}
          />
        </View>
        <SheetParallaxScrollView
          headerHeight={340}
          minimumHeaderHeight={140}
          header={
            <Image
              source={{ uri: "https://placehold.co/400x300?text=product" }}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          }
        >
          <View
            style={{
              paddingBottom: 140,
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 20,
            }}
          >
            <View>
              <AppText type="pageTitle" style={{ textAlign: "right" }}>
                حليب مراعي
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <AppBadge variant="primary">
                  <AppText>منتجات البان</AppText>
                </AppBadge>
                <AppText type="secondary">1.5 لتر</AppText>
              </View>
            </View>
            <View style={{ gap: 12 }}>
              <AppText type="pageTitle" style={{ textAlign: "right" }}>
                الخيار الأكثر توفيرًا
              </AppText>
              <FavMarket
                imageUri="https://placehold.co/120x50?text=market"
                number={2}
                selected={true}
              />
            </View>
            <AppButton
              startComponent={(color) => (
                <MingCuteIcon name="git_compare_line" size={20} color={color} />
              )}
              variant="outline"
              title="قارن الأسعار"
              onPress={handlePriceComparison}
            />
          </View>
        </SheetParallaxScrollView>
        <AppBottomView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 25,
            borderTopColor: Colors[theme].secondary.default,
            borderTopWidth: 0.5,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AppBadge variant="primary">
                <AppText type="pageTitle">14</AppText>
              </AppBadge>
              <AppText type="defaultBold" style={{ fontFamily: "Cairo-Bold" }}>
                السعر
              </AppText>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <IconButton
                  compact
                  variant="primary"
                  icon={(color) => (
                    <MingCuteIcon
                      name="minimize_fill"
                      size={20}
                      color={color}
                    />
                  )}
                />
                <AppText type="pageTitle">2</AppText>
                <IconButton
                  compact
                  variant="secondary"
                  icon={(color) => (
                    <MingCuteIcon name="add_fill" size={20} color={color} />
                  )}
                />
              </View>
              <AppText>الكمية</AppText>
            </View>
          </View>
          <AppButton
            startComponent={(color) => (
              <MingCuteIcon
                name="shopping_cart_1_line"
                size={20}
                color={color}
              />
            )}
            title="اضف الى السلة"
            variant="secondary"
          />
        </AppBottomView>
      </AppSheet>

      <PriceComparisonSheet ref={priceComparisonRef} />
      {/* Price Comparison Sheet */}
    </>
  );
});

ProductSheet.displayName = "ProductSheet";

export default ProductSheet;
