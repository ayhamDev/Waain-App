import AppContainer from "@/components/global/AppContainer";
import React from "react";
import { ViewStyle } from "react-native";
import AppHeader from "./AppHeader";

function AppScreen({
  children,
  stack = false,
  scroll = true,
  contentStyle,
  title,
}: {
  children: React.JSX.Element | React.JSX.Element[];
  stack?: boolean;
  scroll?: boolean;
  title?: string;
  contentStyle?: ViewStyle;
}) {
  return (
    <AppContainer
      scroll={scroll}
      contentStyle={contentStyle}
      header={<AppHeader stack={stack} title={title} />}
    >
      {children}
    </AppContainer>
  );
}

export default AppScreen;
