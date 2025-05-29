import AppBottomView from "@/components/global/AppBottomView";
import AppScreen from "@/components/global/AppScreen";
import { AppSeperator } from "@/components/global/AppSeperator";
import { AppText } from "@/components/global/AppText";
import ProductCardHistory from "@/components/product/ProductCardHistory";
import { AppButton } from "@/components/ui/Button";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import React from "react";
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

const HistoryDetailsScreen = () => {
  const { theme } = useColorScheme();
  return (
    <AppScreen
      title="تفاصيل المشتريات"
      stack={true}
      scroll={false}
      contentStyle={{ flex: 1, paddingBottom: 100 }}
    >
      <View style={{ gap: 20 }}>
        <Image
          style={{
            alignSelf: "flex-end",
            height: 100,
            width: 150,
            borderRadius: 12,
            backgroundColor: Colors[theme].secondary.default,
          }}
          contentFit="contain"
          contentPosition={"center"}
          source={{
            uri: "https://placehold.co/150x100/webp",
          }}
        />
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <AppText style={{ textAlign: "right" }} type="secondary">
              نوع الطلب
            </AppText>
            <AppText
              style={{
                textAlign: "right",
                borderBottomColor: Colors[theme].primary[950],
                color: Colors[theme].primary[800],
                lineHeight: 25,
                borderBottomWidth: 1,
              }}
              type="defaultBold"
            >
              تسوق مباشر
            </AppText>
          </View>
          <View>
            <AppText style={{ textAlign: "right" }} type="secondary">
              سعر الطلب
            </AppText>
            <AppText style={{ textAlign: "right" }} type="defaultBold">
              550 ريال
            </AppText>
          </View>
          <View>
            <AppText style={{ textAlign: "right" }} type="secondary">
              تاريخ الطلب
            </AppText>
            <AppText style={{ textAlign: "right" }} type="defaultBold">
              2025/12/05
            </AppText>
          </View>
        </View>
        <AppSeperator />
        <TextInputField
          startComponent={({ color }) => (
            <MingCuteIcon size={20} name="search_line" color={color} />
          )}
          placeholder="Search..."
          containerStyle={{
            marginBottom: 55,
          }}
        />
      </View>
      <FlatList
        contentContainerStyle={{ paddingTop: 20 }}
        data={products}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <ProductCardHistory
              productName={item.productName}
              productType={item.productType}
              weight={item.weight}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              onPress={() => console.log(`Clicked: ${item.productName}`)}
            />
          </View>
        )}
      />
      <AppBottomView>
        <AppButton
          onPress={() => {}}
          variant="secondary"
          style={{}}
          title="أضف إلى السلة مرة اخرى"
        />
      </AppBottomView>
    </AppScreen>
  );
};

export default HistoryDetailsScreen;
