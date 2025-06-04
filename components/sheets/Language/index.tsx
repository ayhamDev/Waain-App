import AppSheetHeader from "@/components/global/AppSheetHeader";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppSheet from "../AppSheet";

const languages = ["العربية", "English"] as const;

const LanguageSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  const [selected, setSelected] = useState<string>("العربية");

  const toggleLanguage = (lang: string) => {
    setSelected(lang);
  };

  return (
    <AppSheet ref={ref} snapPoints={undefined} enableDynamicSizing={true}>
      <BottomSheetView style={styles.contentContainer}>
        <AppSheetHeader back={false} title="اختار اللغة" />
        <AppView style={{ padding: 20, width: "100%" }}>
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
    </AppSheet>
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
