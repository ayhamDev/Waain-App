import AppScreen from "@/components/global/AppScreen";
import { ProductCard } from "@/components/product/ProductCard";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function FavouriteScreen() {
  const { theme } = useColorScheme();
  return (
    <AppScreen
      scroll={false}
      stack={true}
      title={"المفضلة"}
      contentStyle={{
        paddingHorizontal: 0,
        margin: 0,
      }}
    >
      <View style={{ gap: 20 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <TextInputField
            startComponent={({ color }) => (
              <MingCuteIcon size={22} name="search_line" color={color} />
            )}
            placeholder="Search..."
            style={{ flex: 1 }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            marginTop: 30,
          }}
        >
          <FlatGrid
            itemDimension={150}
            spacing={15}
            contentContainerStyle={{
              paddingBottom: 100,
              justifyContent: "space-between",
            }}
            itemContainerStyle={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Array.from({ length: 10 }, (value, index) => index)}
            renderItem={({ item }) => (
              <ProductCard
                imageUri="https://placehold.co/120x120?text=product"
                title="product"
                badgeText="dairy"
                subtitle="milk"
              />
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
}
