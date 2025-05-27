import "@/components/sheets/AppSheets";
import React, { PropsWithChildren } from "react";
import { SheetProvider } from "react-native-actions-sheet";

const AppSheetProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <SheetProvider>{children}</SheetProvider>;
};

export default AppSheetProvider;
