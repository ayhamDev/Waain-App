import AppContainer from "@/components/global/AppContainer";
import { AppText } from "@/components/global/AppText";
import SearchHeader from "@/components/global/SearchHeader";
import { ProductCard } from "@/components/product/ProductCard";
import FilterCard from "@/components/screens/search/FilterCard";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon, {
  MingCuteIconName,
} from "@/components/ui/MingCute/MingCuteIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
    icon: "store_2_fill",
    onPress: () => {},
  },
  {
    id: "price",
    name: "السعر",
    icon: "store_2_fill",
    onPress: () => {},
  },
];

export default function SearchScreen() {
  const { theme } = useColorScheme();
  const scrollY = useSharedValue(0);
  // Mock search history data - in a real app, this would come from storage/state management
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([
    {
      id: "1",
      query: "React Native tutorial",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "2",
      query: "JavaScript async await",
      timestamp: new Date(Date.now() - 172800000),
    },
    {
      id: "3",
      query: "TypeScript interfaces",
      timestamp: new Date(Date.now() - 259200000),
    },
    {
      id: "4",
      query: "Mobile app development",
      timestamp: new Date(Date.now() - 345600000),
    },
    {
      id: "5",
      query: "React hooks useState",
      timestamp: new Date(Date.now() - 432000000),
    },
    {
      id: "6",
      query: "CSS flexbox layout",
      timestamp: new Date(Date.now() - 518400000),
    },
    {
      id: "7",
      query: "API integration guide",
      timestamp: new Date(Date.now() - 604800000),
    },
    {
      id: "8",
      query: "Expo development setup",
      timestamp: new Date(Date.now() - 691200000),
    },
    {
      id: "9",
      query: "Expo development setup",
      timestamp: new Date(Date.now() - 691200000),
    },
  ]);

  const handleSearchHistoryPress = (query: string) => {
    // Handle search history item press
    console.log("Selected search:", query);
    // You can navigate to search results or populate search input here
  };

  const handleRemoveHistoryItem = (id: string) => {
    setSearchHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAllHistory = () => {
    setSearchHistory([]);
  };

  return (
    <AppContainer
      contentStyle={{
        paddingHorizontal: 0,
        gap: 0,
        flex: 1,
      }}
      scrollY={scrollY}
      scroll={false}
      header={<SearchHeader scrollY={scrollY} stack={false} />}
    >
      <View style={styles.container}>
        {/* State of search history */}
        {/* <RecentSearch
          scrollY={scrollY}
          history={searchHistory}
          onClearAll={handleClearAllHistory}
          onPressItem={handleSearchHistoryPress}
          onRemoveItem={handleRemoveHistoryItem}
        /> */}

        {/* State of search query */}
        <View style={{ gap: 10 }}>
          <View style={{ paddingHorizontal: 20, gap: 5 }}>
            <AppText style={{ textAlign: "right" }} type="pageTitle">
              نتائج البحث
            </AppText>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <AppText type="defaultBold">“product name”</AppText>
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
            marginBottom: -20,
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
