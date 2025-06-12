import AppContainer from "@/components/global/AppContainer";
import SearchHeader from "@/components/global/SearchHeader";
import RecentSearch from "@/components/screens/search/RecentSearch";
import { useAppSheet } from "@/context/AppSheet.context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: Date;
}

export default function SearchScreen() {
  const { theme } = useColorScheme();
  // Grab the 'query' param, if any, from the URL/search params
  const { query, stack } = useLocalSearchParams<{
    query?: string;
    stack?: "result";
  }>();
  const router = useRouter();

  const searchRef = useRef<TextInput>(null);
  const [IsSearching, SetIsSearching] = useState(false);
  const scrollY = useSharedValue(0);

  // State to control the input text, initialized from query param:
  const [searchText, setSearchText] = useState<string>(() =>
    typeof query === "string" ? query : ""
  );

  // Whenever the URL param `query` changes (e.g., user navigates back with a different param),
  // update the input state to reflect it.
  useEffect(() => {
    if (typeof query === "string") {
      setSearchText(query);
    } else {
      // If query param becomes undefined or non-string, you may decide to clear:
      setSearchText("");
    }
  }, [query]);

  // Mock search history data - in a real app, this would come from storage/state management
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([
    {
      id: "1",
      query: "React Native tutorial",
      timestamp: new Date(Date.now() - 86400000),
    },
    // ... other items
  ]);

  const { ProductSheet } = useAppSheet();

  // When user taps a history item, navigate (and set searchText if desired)
  const handleSearchHistoryPress = useCallback(
    (q: string) => {
      // Populate input and navigate to results:
      router.push({
        pathname: "/search/result",
        params: { query: q },
      });
    },
    [router]
  );

  const handleRemoveHistoryItem = (id: string) => {
    setSearchHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAllHistory = () => {
    setSearchHistory([]);
  };

  // Auto-focus input when screen is focused
  useFocusEffect(() => {
    const timeout = setTimeout(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }, 300);
    return () => clearTimeout(timeout);
  });

  // Handler when user submits from keyboard
  const handleSubmitEditing = () => {
    const trimmed = searchText.trim();
    if (trimmed.length > 0) {
      router.push({
        pathname: "/search/result",
        params: { query: trimmed },
      });
    }
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
      header={
        <SearchHeader
          stack={stack == "result" ? true : false}
          // Pass controlled value and onChangeText so input shows searchText
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSubmitEditing}
          ref={searchRef}
          scrollY={scrollY}
          // In the Search tab’s index, typically you want inline editing,
          // so we omit navigateOnPress (or set to false).
        />
      }
    >
      <View style={styles.container}>
        {/* State of search history */}
        <RecentSearch
          SetIsSearching={SetIsSearching}
          IsSearching={IsSearching}
          scrollY={scrollY}
          history={searchHistory}
          onClearAll={handleClearAllHistory}
          onPressItem={handleSearchHistoryPress}
          onRemoveItem={handleRemoveHistoryItem}
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
