// context/ProductSheetContext.tsx
import ProductSheet from "@/components/sheets/product";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { createContext, useCallback, useContext, useRef } from "react";

type ProductSheetContextType = {
  present: () => void;
  dismiss: () => void;
};

const ProductSheetContext = createContext<ProductSheetContextType | undefined>(
  undefined
);

export const useProductSheet = () => {
  const context = useContext(ProductSheetContext);
  if (!context) {
    throw new Error(
      "useProductSheet must be used within a ProductSheetProvider"
    );
  }
  return context;
};

export const ProductSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const sheetRef = useRef<BottomSheetModal>(null);

  const present = useCallback(() => {
    sheetRef.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  return (
    <ProductSheetContext.Provider value={{ present, dismiss }}>
      {children}
      <ProductSheet ref={sheetRef} />
    </ProductSheetContext.Provider>
  );
};

ProductSheetProvider.displayName = "ProductSheetProvider";
