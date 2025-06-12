import { AppText } from "@/components/global/AppText";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: Date;
}

interface RecentSearchProps {
  history: SearchHistoryItem[];
  scrollY: Animated.SharedValue<number>;
  IsSearching: boolean;
  SetIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  onPressItem: (query: string) => void;
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

const RecentSearch: React.FC<RecentSearchProps> = ({
  history,
  scrollY,
  IsSearching,
  SetIsSearching,
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
            <AppText
              style={[styles.historyText, { textAlign: "right" }]}
              numberOfLines={1}
            >
              {item.query}
            </AppText>
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

  const ListHeader = () => (
    <View style={styles.historyHeader}>
      <AppText style={styles.historyTitle} type="pageTitle">
        عمليات البحث الأخيرة
      </AppText>
      {history.length > 0 && (
        <TouchableOpacity onPress={onClearAll}>
          <AppText style={styles.clearAllText}>مسح الكل</AppText>
        </TouchableOpacity>
      )}
    </View>
  );

  const emptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={48} color="#ccc" />
      <AppText style={styles.emptyStateText}>لا يوجد عمليات بحث</AppText>
      <AppText style={styles.emptyStateSubtext}>
        سيتم عرض سجل عمليات البحث هنا
      </AppText>
    </View>
  );

  return (
    <View style={styles.container}>
      <ListHeader />
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <>{emptyState()}</>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    paddingTop: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  listContainer: { paddingBottom: 20 },
  historyHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    writingDirection: "rtl",
  },
  clearAllText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
    writingDirection: "rtl",
  },
  historyItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  historyItemContent: {
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: 1,
  },
  historyIcon: {
    marginLeft: 12,
  },
  historyText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    writingDirection: "rtl",
  },
  removeButton: {
    padding: 4,
    marginRight: 8,
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
    writingDirection: "rtl",
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 8,
    textAlign: "center",
    writingDirection: "rtl",
  },
});

export default RecentSearch;
