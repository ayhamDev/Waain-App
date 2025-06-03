import AppBadge from "@/components/global/AppBadge";
import AppBottomView from "@/components/global/AppBottomView";
import AppCard from "@/components/global/AppCard";
import AppScreen from "@/components/global/AppScreen";
import { AppSeperator } from "@/components/global/AppSeperator";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import ProductCardCart from "@/components/product/ProductCardCart";
import CartSheet from "@/components/sheets/cart";
import MarketSheet from "@/components/sheets/market";
import { AppButton } from "@/components/ui/Button";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React, { useRef } from "react";
import { FlatList, View } from "react-native";
const products = [
  {
    productName: "تفاح أحمر",
    productType: "فاكهة",
    weight: "1 كيلو",
    price: "8﷼",
    quantity: 3,
    imageUrl: "https://placehold.co/125x125/png?text=Apple",
  },
  {
    productName: "حليب كامل الدسم",
    productType: "مشروبات",
    weight: "1 لتر",
    price: "6﷼",
    quantity: 1,
    imageUrl: "https://placehold.co/125x125/png?text=Milk",
  },
  {
    productName: "دقيق أبيض فاخر",
    productType: "مواد أساسية",
    weight: "5 كيلو",
    price: "18﷼",
    quantity: 2,
    imageUrl: "https://placehold.co/125x125/png?text=Flour",
  },
  {
    productName: "رز بسمتي",
    productType: "أرز",
    weight: "10 كيلو",
    price: "48﷼",
    quantity: 1,
    imageUrl: "https://placehold.co/125x125/png?text=Rice",
  },
  {
    productName: "زيت نباتي",
    productType: "زيوت",
    weight: "1.8 لتر",
    price: "15﷼",
    quantity: 2,
    imageUrl: "https://placehold.co/125x125/png?text=Oil",
  },
];

const CartScreen = () => {
  const { theme } = useColorScheme();
  const CartSheetRef = useRef<BottomSheetModal>(null);
  const MarketSheetRef = useRef<BottomSheetModal>(null);
  return (
    <AppScreen contentStyle={{ flex: 1 }} scroll={false}>
      <View style={{ gap: 20 }}>
        <View style={{ gap: 5 }}>
          <FlatList
            bounces={true}
            contentContainerStyle={{ paddingBottom: 120 }}
            data={products}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            ListHeaderComponent={() => (
              <View style={{ gap: 10 }}>
                <AppCard
                  style={{
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
                    <AppButton
                      compact
                      title="تحديد"
                      onPress={() => {
                        MarketSheetRef.current?.present();
                      }}
                      variant="secondary"
                      startComponent={(color) => (
                        <MingCuteIcon
                          name="store_line"
                          size={20}
                          color={color}
                        />
                      )}
                    />
                    <AppText type="pageTitle">السوبرماركت المحدد</AppText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <View style={{ gap: 5 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <MingCuteIcon
                          name="large_arrow_up_fill"
                          color={Colors[theme].alart.default}
                          size={20}
                        />
                        <AppText>سعر المنتجات</AppText>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <MingCuteIcon
                          name="large_arrow_down_fill"
                          color={Colors[theme].primary[600]}
                          size={20}
                        />
                        <AppText>سعر المنتجات</AppText>
                      </View>
                    </View>
                    <Image
                      style={{
                        alignSelf: "flex-end",
                        height: 70,
                        width: 120,
                        borderRadius: 12,
                        backgroundColor: Colors[theme].secondary.default,
                      }}
                      contentFit="contain"
                      contentPosition={"center"}
                      source={{
                        uri: "https://placehold.co/120x80/webp",
                      }}
                    />
                  </View>
                </AppCard>
                <AppText style={{ textAlign: "right" }} type="pageTitle">
                  تفاصيل المنتجات
                </AppText>
              </View>
            )}
            ListHeaderComponentStyle={{
              marginBottom: 20,
            }}
            renderItem={({ item }) => (
              <AppView>
                <ProductCardCart
                  productName={item.productName}
                  productType={item.productType}
                  weight={item.weight}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                  onPress={() => console.log(`Clicked: ${item.productName}`)}
                />
                <AppSeperator />
              </AppView>
            )}
          />
        </View>
      </View>
      <AppBottomView style={{ gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppBadge variant="primary">
            <AppText type="pageTitle">40</AppText>
          </AppBadge>
          <AppText type="listTitle" style={{ fontFamily: "Cairo-Bold" }}>
            سعر المنتجات
          </AppText>
        </View>
        <AppButton
          title="متابعة الشراء"
          variant="secondary"
          onPress={() => CartSheetRef.current?.present()}
        />
      </AppBottomView>
      <CartSheet ref={CartSheetRef} />
      <MarketSheet ref={MarketSheetRef} />
    </AppScreen>
  );
};

export default CartScreen;
