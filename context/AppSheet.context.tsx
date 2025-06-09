// context/AppSheetContext.tsx
import ProductSheet from "@/components/sheets/product";
import PriceComparisonSheet from "@/components/sheets/product/PriceComparisonSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { createContext, useCallback, useContext, useRef } from "react";

type AppSheetMethods = {
  present: () => void;
  dismiss: () => void;
};
type AppSheetContextType = {
  ProductSheet: AppSheetMethods;
  PriceComparisonSheet: AppSheetMethods;
};

const AppSheetContext = createContext<AppSheetContextType | undefined>(
  undefined
);

export const useAppSheet = () => {
  const context = useContext(AppSheetContext);
  if (!context) {
    throw new Error("useAppSheet must be used within an AppSheetProvider");
  }
  return context;
};

export const AppSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ProductSheetRef = useRef<BottomSheetModal>(null);
  const PriceComparisonRef = useRef<BottomSheetModal>(null);

  const ProductPresent = useCallback(() => {
    ProductSheetRef.current?.present();
  }, []);

  const ProductDismiss = useCallback(() => {
    ProductSheetRef.current?.dismiss();
  }, []);

  const PriceComparisonPresent = useCallback(() => {
    PriceComparisonRef.current?.present();
  }, []);

  const PriceComparisonDismiss = useCallback(() => {
    PriceComparisonRef.current?.dismiss();
  }, []);

  return (
    <AppSheetContext.Provider
      value={{
        ProductSheet: { present: ProductPresent, dismiss: ProductDismiss },
        PriceComparisonSheet: {
          present: PriceComparisonPresent,
          dismiss: PriceComparisonDismiss,
        },
      }}
    >
      {children}
      <ProductSheet ref={ProductSheetRef} />
      <PriceComparisonSheet ref={PriceComparisonRef} />
    </AppSheetContext.Provider>
  );
};

AppSheetProvider.displayName = "AppSheetProvider";
