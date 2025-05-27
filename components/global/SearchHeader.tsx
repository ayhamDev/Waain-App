import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { forwardRef } from "react";
import { StatusBar, StyleSheet, TextInput, View } from "react-native";
import TextInputField from "../ui/Input";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface SearchHeaderProps {}

const SearchHeader = forwardRef<TextInput, SearchHeaderProps>((_, ref) => {
  const { theme } = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: Colors[theme].secondary.default,
          borderBottomWidth: 0.75,
        },
        { paddingTop: (StatusBar.currentHeight || 35) + 8 },
      ]}
    >
      <TextInputField
        ref={ref}
        startComponent={({ color }) => (
          <MingCuteIcon size={22} name="search_line" color={color} />
        )}
        placeholder="Search..."
        style={{ flex: 1 }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    boxSizing: "content-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    backgroundColor: "#fff",
    zIndex: 1000,
  },
});

export default SearchHeader;
