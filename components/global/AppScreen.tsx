import AppContainer from "@/components/global/AppContainer";
import AppHeader from "@/components/global/AppHeader";
import React from "react";
import { useSharedValue } from "react-native-reanimated";

export default function AppScreen({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  const scrollY = useSharedValue(0);

  return (
    <AppContainer header={<AppHeader scrollY={scrollY} />} scrollY={scrollY}>
      {children}
    </AppContainer>
  );
}
