import AppBadge from "@/components/global/AppBadge";
import AppBottomView from "@/components/global/AppBottomView";
import { AppText } from "@/components/global/AppText";
import SheetParallaxScrollView from "@/components/SheetParallaxScrollView";
import { AppButton } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React, { forwardRef, useMemo, useState } from "react";
import { View } from "react-native";
import AppSheet from "../AppSheet";
// Types
interface PriceComparisonItem {
  id: number;
  marketName: string;
  marketImage: string;
  price: number;
  originalPrice: number;
  discount: string | null;
  isAvailable: boolean;
  rating: number;
  deliveryTime: string;
}

interface PriceComparisonSheetProps {
  productData?: {
    name?: string;
    size?: string;
    image?: string;
  };
}

// Price Comparison Sheet Component
const PriceComparisonSheet = forwardRef<
  BottomSheetModal,
  PriceComparisonSheetProps
>((props, ref) => {
  const { productData } = props;
  const { theme } = useColorScheme();
  const { dismiss } = useBottomSheetModal();
  const snapPoints = useMemo(() => ["90%"], []);

  // Sample price comparison data - replace with your actual data
  const priceComparisons: PriceComparisonItem[] = [
    {
      id: 1,
      marketName: "كارفور",
      marketImage: "https://placehold.co/120x50?text=carrefour",
      price: 12.5,
      originalPrice: 15.0,
      discount: "17%",
      isAvailable: true,
      rating: 4.5,
      deliveryTime: "30-45 دقيقة",
    },
    {
      id: 2,
      marketName: "لولو هايبر ماركت",
      marketImage: "https://placehold.co/120x50?text=lulu",
      price: 14.0,
      originalPrice: 14.0,
      discount: null,
      isAvailable: true,
      rating: 4.3,
      deliveryTime: "45-60 دقيقة",
    },
    {
      id: 3,
      marketName: "بنده",
      marketImage: "https://placehold.co/120x50?text=panda",
      price: 13.25,
      originalPrice: 16.0,
      discount: "17%",
      isAvailable: false,
      rating: 4.1,
      deliveryTime: "غير متوفر",
    },
    {
      id: 4,
      marketName: "العثيم",
      marketImage: "https://placehold.co/120x50?text=othaim",
      price: 11.75,
      originalPrice: 13.5,
      discount: "13%",
      isAvailable: true,
      rating: 4.4,
      deliveryTime: "20-35 دقيقة",
    },
  ];

  const [selectedMarket, setSelectedMarket] = useState<PriceComparisonItem>(
    priceComparisons[0]
  );

  const renderPriceItem = ({ item }: { item: PriceComparisonItem }) => (
    <View
      style={{
        backgroundColor: Colors[theme].background.default,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        marginHorizontal: 20,
        borderWidth: selectedMarket.id === item.id ? 2 : 1,
        borderColor:
          selectedMarket.id === item.id
            ? Colors[theme].primary.default
            : Colors[theme].secondary.default,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={{ uri: item.marketImage }}
            style={{
              width: 50,
              height: 30,
              borderRadius: 6,
            }}
          />
          <View>
            <AppText type="defaultBold" style={{ textAlign: "right" }}>
              {item.marketName}
            </AppText>
            <AppText
              type="secondary"
              style={{ textAlign: "right", fontSize: 12 }}
            >
              {item.deliveryTime}
            </AppText>
          </View>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AppText
              type="pageTitle"
              style={{ color: Colors[theme].primary.default }}
            >
              {item.price.toFixed(2)} ر.س
            </AppText>
            {item.originalPrice > item.price && (
              <AppText
                type="secondary"
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 12,
                }}
              >
                {item.originalPrice.toFixed(2)}
              </AppText>
            )}
          </View>
          {item.discount && (
            <AppBadge variant="primary" style={{ marginTop: 4 }}>
              <AppText style={{ fontSize: 10 }}>خصم {item.discount}</AppText>
            </AppBadge>
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <MingCuteIcon
            name="star_fill"
            size={16}
            color={Colors[theme].primary.default}
          />
          <AppText type="secondary" style={{ fontSize: 12 }}>
            {item.rating}
          </AppText>
        </View>

        <AppButton
          title={item.isAvailable ? "اختر هذا المتجر" : "غير متوفر"}
          variant={item.isAvailable ? "primary" : "secondary"}
          disabled={!item.isAvailable}
          onPress={() => setSelectedMarket(item)}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    </View>
  );

  // Header component for parallax
  const ParallaxHeader = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Product Info Header */}
      <View
        style={{
          backgroundColor: Colors[theme].background.default,
          borderRadius: 12,
          padding: 16,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          shadowColor: Colors[theme].secondary.default,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View style={{ flex: 1 }}>
          <AppText
            type="pageTitle"
            style={{ textAlign: "right", marginBottom: 8 }}
          >
            {productData?.name || "حليب مراعي"}
          </AppText>
          <AppText
            type="secondary"
            style={{ textAlign: "right", fontSize: 16 }}
          >
            {productData?.size || "1.5 لتر"}
          </AppText>
        </View>
        <Image
          source={{
            uri:
              productData?.image || "https://placehold.co/80x80?text=product",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );

  // Sticky header component
  const StickyHeader = () => (
    <View
      style={{
        backgroundColor: Colors[theme].background.default,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomColor: Colors[theme].secondary.default,
        borderBottomWidth: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText type="defaultBold" style={{ textAlign: "right" }}>
          ترتيب حسب:
        </AppText>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <AppBadge variant="primary">
            <AppText style={{ fontSize: 12 }}>السعر</AppText>
          </AppBadge>
          <AppBadge variant="secondary">
            <AppText style={{ fontSize: 12 }}>التقييم</AppText>
          </AppBadge>
          <AppBadge variant="secondary">
            <AppText style={{ fontSize: 12 }}>التوصيل</AppText>
          </AppBadge>
        </View>
      </View>
    </View>
  );

  return (
    <AppSheet ref={ref} enableDynamicSizing={false} snapPoints={snapPoints}>
      {/* Fixed Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 16,
          backgroundColor: Colors[theme].background.default,
          borderBottomColor: Colors[theme].secondary.default,
          borderBottomWidth: 0.5,
          zIndex: 10,
        }}
      >
        <IconButton
          rounded={false}
          icon={(color) => (
            <MingCuteIcon name="left_line" size={24} color={color} />
          )}
          onPress={() => dismiss()}
        />

        <AppText type="pageTitle" style={{ textAlign: "center" }}>
          مقارنة الاسعار
        </AppText>

        <View style={{ width: 40 }} />
      </View>

      {/* Parallax ScrollView with FlatList */}
      <SheetParallaxScrollView
        headerHeight={200}
        sticyHeaderHeight={50}
        minimumHeaderHeight={0}
        header={<ParallaxHeader />}
        stickyHeader={<StickyHeader />}
        data={priceComparisons}
        renderItem={renderPriceItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 160, // Space for bottom action bar
          paddingTop: 200,
        }}
        containerStyle={{ flex: 1 }}
      />

      {/* Bottom Action Bar */}
      <AppBottomView
        style={{
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderTopColor: Colors[theme].secondary.default,
          borderTopWidth: 0.5,
          gap: 12,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <AppText
              type="secondary"
              style={{ textAlign: "right", fontSize: 12 }}
            >
              المتجر المختار
            </AppText>
            <AppText type="defaultBold" style={{ textAlign: "right" }}>
              {selectedMarket.marketName}
            </AppText>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <AppText type="secondary" style={{ fontSize: 12 }}>
              السعر الإجمالي
            </AppText>
            <AppText
              type="pageTitle"
              style={{ color: Colors[theme].primary.default }}
            >
              {selectedMarket.price.toFixed(2)} ر.س
            </AppText>
          </View>
        </View>

        <AppButton
          startComponent={(color) => (
            <MingCuteIcon name="shopping_cart_1_line" size={20} color={color} />
          )}
          title="اضف الى السلة"
          variant="secondary"
        />
      </AppBottomView>
    </AppSheet>
  );
});

PriceComparisonSheet.displayName = "PriceComparisonSheet";

export default PriceComparisonSheet;
