import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { Ref, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const languages = ["العربية", "English"] as const;

const LanguageSheet = ({ ref }: { ref: Ref<any> }) => {
  const { theme } = useColorScheme();
  const [selected, setSelected] = useState<string>("العربية");

  const toggleLanguage = (lang: string) => {
    setSelected(lang);
  };

  return (
    <ActionSheet
      ref={ref}
      gestureEnabled={true}
      containerStyle={styles.sheetContainer}
      indicatorStyle={styles.indicator}
    >
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
            {index < languages.length - 1 && <View style={styles.separator} />}
          </React.Fragment>
        ))}
      </AppView>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    backgroundColor: "#fff", // Optional: match your theme
  },
  indicator: {
    width: 100,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginVertical: 10,
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

export default LanguageSheet;
