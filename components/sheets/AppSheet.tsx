import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, ReactNode, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

type AppSheetProps = {
  children: ReactNode;
  snapPoints?: string[];
} & Omit<BottomSheetModalProps, "snapPoints" | "children" | "ref">;

const AppSheet = forwardRef<BottomSheetModal, AppSheetProps>(
  ({ children, snapPoints = undefined, ...rest }, ref) => {
    const { theme } = useColorScheme();

    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 20,
      overshootClamping: false,
      restDisplacementThreshold: 0.5,
      restSpeedThreshold: 0.5,
      stiffness: 150,
    });

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
          pressBehavior="close"
        />
      ),
      []
    );

    // Handle Android Back Button

    // make sure to fix the back button

    const backgroundColor = useMemo(
      () => ({ backgroundColor: Colors[theme].background.default }),
      [theme]
    );

    return (
      <BottomSheetModal
        ref={ref}
        animationConfigs={animationConfigs}
        enablePanDownToClose
        backgroundStyle={[styles.sheetContainer, backgroundColor]}
        handleIndicatorStyle={{ display: "none" }}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        {...rest} // pass down remaining props
      >
        {children}
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  sheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "red",
  },
  indicator: {
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
  },
});

AppSheet.displayName = "AppSheet";

export default AppSheet;
