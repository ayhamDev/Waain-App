import AppContainer from "@/components/global/AppContainer";
import { AppText } from "@/components/global/AppText";
import SearchHeader from "@/components/global/SearchHeader";
import { ProductCard } from "@/components/product/ProductCard";
import FilterCard from "@/components/screens/search/FilterCard";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon, {
  MingCuteIconName,
} from "@/components/ui/MingCute/MingCuteIcon";
import { useAppSheet } from "@/context/AppSheet.context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useLocalSearchParams } from "expo-router";
import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

import { FlatGrid } from "react-native-super-grid";

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: Date;
}

const filters: {
  id: string;
  name: string;
  icon: MingCuteIconName;
  onPress: () => void;
}[] = [
  {
    id: "market",
    name: "السوبرماركت",
    icon: "store_2_fill",
    onPress: () => {},
  },
  {
    id: "brand",
    name: "العلامة التجارية",
    icon: "tag_fill",
    onPress: () => {},
  },
  {
    id: "price",
    name: "السعر",
    icon: "sale_fill",
    onPress: () => {},
  },
];

export default function SearchScreen() {
  const { query } = useLocalSearchParams();
  const { theme } = useColorScheme();

  const searchRef = useRef<TextInput>(null);
  // Mock search history data - in a real app, this would come from storage/state management
  const scrollY = useSharedValue(0);
  const { ProductSheet } = useAppSheet();
  return (
    <AppContainer
      contentStyle={{
        paddingHorizontal: 0,
        gap: 0,
        flex: 1,
      }}
      scrollY={scrollY}
      scroll={false}
      header={
        <SearchHeader
          value={query as string}
          navigateOnPress
          scrollY={scrollY}
        />
      }
    >
      <View style={styles.container}>
        {/* State of search query */}
        <View style={{ gap: 10 }}>
          <View style={{ paddingHorizontal: 20, gap: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <AppText
                type="defaultBold"
                numberOfLines={2}
                style={{ maxWidth: 250 }}
              >
                {query}
              </AppText>
              <AppText type="secondary">30 نتيجة بحث</AppText>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              compact={true}
              style={{
                marginLeft: 20,
                marginRight: 10,
              }}
              variant="danger"
              icon={(color) => (
                <MingCuteIcon name="delete_2_fill" size={18} color={color} />
              )}
            />

            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
              }}
            >
              {filters.map((filter) => (
                <FilterCard
                  filter={filter}
                  onPress={filter.onPress}
                  key={filter.id}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <FlatGrid
          itemDimension={150}
          spacing={15}
          style={{
            marginTop: 10,
            flex: 1,
          }}
          contentContainerStyle={{
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
              onPress={() => ProductSheet.present()}
            />
          )}
        />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 0,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  clearAllText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  historyItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  historyIcon: {
    marginRight: 12,
  },
  historyText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  removeButton: {
    padding: 4,
    marginLeft: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#999",
    marginTop: 16,
    textAlign: "center",
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 8,
    textAlign: "center",
  },
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
