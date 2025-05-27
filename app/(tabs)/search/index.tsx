"use client";

import AppContainer from "@/components/global/AppContainer";
import SearchHeader from "@/components/global/SearchHeader";
import { useFocusEffect } from "expo-router";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen() {
  const inputRef = useRef<TextInput>(null);

  useFocusEffect(() => {
    const timeout = setTimeout(() => {
      if (!inputRef?.current?.isFocused()) {
        inputRef?.current?.focus();
      }
    }, 250); // Android sometimes needs a delay
    return () => clearTimeout(timeout);
  });

  return (
    <View>
      <AppContainer header={<SearchHeader ref={inputRef} />}>
        {/* Add more content to test scrolling */}
      </AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
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
