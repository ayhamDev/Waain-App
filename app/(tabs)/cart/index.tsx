"use client";

import AppContainer from "@/components/global/AppContainer";
import AppHeader from "@/components/global/AppHeader";
import { StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function HomeScreen() {
  const scrollY = useSharedValue(0);

  return (
    <AppContainer header={<AppHeader scrollY={scrollY} />} scrollY={scrollY}>
      {/* Add more content to test scrolling */}
    </AppContainer>
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
