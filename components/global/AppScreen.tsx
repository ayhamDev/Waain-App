import AppContainer from "@/components/global/AppContainer";
import React from "react";
import AppHeader from "./AppHeader";

function AppScreen({
  children,
  stack = false,
}: {
  children: React.JSX.Element | React.JSX.Element[];
  stack?: boolean;
}) {
  return (
    <AppContainer header={<AppHeader stack={stack} />}>{children}</AppContainer>
  );
}

export default AppScreen;
