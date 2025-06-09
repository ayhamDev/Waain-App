import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: Date;
}

interface RecentSearchProps {
  history: SearchHistoryItem[];
  scrollY: Animated.SharedValue<number>;
  onPressItem: (query: string) => void;
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

const RecentSearch: React.FC<RecentSearchProps> = ({
  history,
  scrollY,
  onPressItem,
  onRemoveItem,
  onClearAll,
}) => {
  const renderItem = ({ item }: { item: SearchHistoryItem }) => {
    const Touchable =
      Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Touchable activeOpacity={0.65} onPress={() => onPressItem(item.query)}>
        <View style={styles.historyItem}>
          <View style={styles.historyItemContent}>
            <MingCuteIcon
              name="time_line"
              size={20}
              color="#666"
              style={styles.historyIcon}
            />
            <Text style={styles.historyText} numberOfLines={1}>
              {item.query}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => onRemoveItem(item.id)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <MingCuteIcon name="close_line" size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </Touchable>
    );
  };

  const listHeader = () => (
    <View style={styles.historyHeader}>
      <Text style={styles.historyTitle}>Recent searches</Text>
      {history.length > 0 && (
        <TouchableOpacity onPress={onClearAll}>
          <Text style={styles.clearAllText}>Clear all</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const emptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={48} color="#ccc" />
      <Text style={styles.emptyStateText}>No recent searches</Text>
      <Text style={styles.emptyStateSubtext}>
        Your search history will appear here
      </Text>
    </View>
  );
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <View style={styles.container}>
      {history.length > 0 ? (
        <Animated.FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={listHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
      ) : (
        <>
          {listHeader()}
          {emptyState()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: { paddingBottom: 20 },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  historyTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  clearAllText: { fontSize: 14, color: "#007AFF", fontWeight: "500" },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  historyItemContent: { flexDirection: "row", alignItems: "center", flex: 1 },
  historyIcon: { marginRight: 12 },
  historyText: { fontSize: 16, color: "#333", flex: 1 },
  removeButton: { padding: 4, marginLeft: 8 },
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
});

export default RecentSearch;
