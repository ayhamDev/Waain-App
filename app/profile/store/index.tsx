import AppScreen from "@/components/global/AppScreen";
import FavMarket from "@/components/market/FavMarket";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { FlatList, View } from "react-native";

const dummyStats = [
  {
    id: "1",
    number: 4,
    imageUri: "https://placehold.co/120x50/webp",
  },
  {
    id: "2",
    number: 12,
    imageUri: "https://placehold.co/120x50/gray",
  },
  {
    id: "3",
    number: 98,
    imageUri: "https://placehold.co/120x50/green",
  },
];

const StoreScreen = () => {
  const { theme } = useColorScheme();
  return (
    <AppScreen
      title="السوبرماركت المفضل"
      stack={true}
      scroll={false}
      contentStyle={{ paddingBottom: 180 }}
    >
      <View style={{ gap: 5, marginBottom: 10 }}>
        <TextInputField
          startComponent={({ color }) => (
            <MingCuteIcon size={22} name="search_line" color={color} />
          )}
          placeholder="Search..."
          style={{ flex: 1 }}
        />
      </View>
      <FlatList
        data={dummyStats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavMarket
            number={item.number}
            imageUri={item.imageUri}
            selected={true}
          />
        )}
        contentContainerStyle={{ padding: 0, gap: 16 }}
      />

      {/* <AppCard
        selected={true}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 65,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <AppText type="pageTitle">4</AppText>
          <AppText type="secondary">عدد الفروع</AppText>
        </View>
        <Image
          style={{
            height: "100%",
            width: 150,
            borderRadius: 12,
            marginBottom: 10,
            backgroundColor: Colors[theme].secondary.default,
          }}
          contentFit="cover"
          contentPosition={"center"}
          source={{
            uri: "https://placehold.co/120x50/webp",
          }}
        />
      </AppCard> */}
    </AppScreen>
  );
};

export default StoreScreen;
