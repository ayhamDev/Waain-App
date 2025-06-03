import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import type { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { BackHandler, StyleSheet, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const languages = ["العربية", "English"] as const;

const LanguageSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  const [selected, setSelected] = useState<string>("العربية");

  // Define snap points for the bottom sheet

  // Backdrop component
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

  const toggleLanguage = (lang: string) => {
    setSelected(lang);
  };
  const { dismiss } = useBottomSheetModal();

  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      backgroundStyle={styles.sheetContainer}
      handleIndicatorStyle={styles.indicator}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <AppView style={{ padding: 20, width: "100%" }}>
          <AppText
            style={{ marginBottom: 20, textAlign: "right" }}
            type="pageTitle"
          >
            اختر اللغة
          </AppText>
          {languages.map((lang, index) => (
            <React.Fragment key={lang}>
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => toggleLanguage(lang)}
              >
                <AppView
                  style={[
                    styles.row,
                    { justifyContent: "space-between", alignItems: "center" },
                  ]}
                >
                  <AppView>
                    <BouncyCheckbox
                      size={25}
                      fillColor={Colors[theme].primary[600]}
                      isChecked={selected === lang}
                      useBuiltInState={false}
                      unFillColor="#FFFFFF"
                      iconStyle={{ borderColor: Colors[theme].primary[400] }}
                      innerIconStyle={{ borderWidth: 2 }}
                      onPress={() => toggleLanguage(lang)}
                    />
                  </AppView>
                  <AppText type="defaultBold">{lang}</AppText>
                </AppView>
              </TouchableOpacity>
              {index < languages.length - 1 && (
                <View style={styles.separator} />
              )}
            </React.Fragment>
          ))}
        </AppView>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  sheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
  },
  indicator: {
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 4,
  },
});

LanguageSheet.displayName = "LanguageSheet";

export default LanguageSheet;
