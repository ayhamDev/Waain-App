import AppCard from "@/components/global/AppCard";
import AppSheetHeader from "@/components/global/AppSheetHeader";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { AppButton } from "@/components/ui/Button";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import AppSheet from "../AppSheet";
const addressDummyData: {
  addressName: string;
  addressLocation: string;
  onPress: () => void;
}[] = [
  {
    addressName: "العمل",
    addressLocation: "YMujammah,jeddah, saudi arabia, 17 267.",
    onPress: () => console.log("Pressed 1"),
  },
  {
    addressName: "4العمل",
    addressLocation: "YMujammah,jeddah, saudi arabia, 17 267.",
    onPress: () => console.log("Pressed 1"),
  },
  {
    addressName: "ا5لعمل",
    addressLocation: "YMujammah,jeddah, saudi arabia, 17 267.",
    onPress: () => console.log("Pressed 1"),
  },
  {
    addressName: "العمgaل",
    addressLocation: "YMujammah,jeddah, saudi arabia, 17 267.",
    onPress: () => console.log("Pressed 1"),
  },
  {
    addressName: "الaعمل",
    addressLocation: "YMujammah,jeddah, saudi arabia, 17 267.",
    onPress: () => console.log("Pressed 1"),
  },
];
const LocationSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();

  return (
    <AppSheet ref={ref} enableDynamicSizing={true} maxDynamicContentSize={550}>
      <AppSheetHeader title="اختار موقعك" />
      <BottomSheetScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
      >
        <AppView style={{ padding: 20, width: "100%", paddingBottom: 25 }}>
          <View style={{ gap: 24 }}>
            <AppText type="pageTitle" style={{ textAlign: "right" }}>
              الموقع المختار
            </AppText>
            <AppCard selected={true} variant="primary">
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "transparent",
                }}
              >
                <AppView
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <AppText
                    type="defaultBold"
                    style={{ textAlign: "right", fontFamily: "Cairo-Bold" }}
                  >
                    موقعك الحالي
                  </AppText>
                  <AppText
                    type="secondary"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ textAlign: "right", maxWidth: 320 }}
                  >
                    سيتم استخدام الموقع الجغرافي لتحديد موقعك الحالي
                  </AppText>
                </AppView>
              </View>
            </AppCard>
            <AppText type="pageTitle" style={{ textAlign: "right" }}>
              مواقع اخرى
            </AppText>
            {addressDummyData.map((address) => (
              <AppCard key={address.addressName}>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <AppView>
                    <AppText
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      type="defaultBold"
                      style={{
                        textAlign: "right",
                        maxWidth: 200,
                        fontFamily: "Cairo-Bold",
                      }}
                    >
                      {address.addressName}
                    </AppText>
                    <AppText
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{ textAlign: "right", maxWidth: 200 }}
                    >
                      {address.addressLocation}
                    </AppText>
                  </AppView>
                </View>
              </AppCard>
            ))}
          </View>
        </AppView>
      </BottomSheetScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderTopColor: Colors[theme].secondary.default,
          borderTopWidth: 0.5,
        }}
      >
        <AppButton title="متابعة" variant="secondary" />
      </View>
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

LocationSheet.displayName = "LocationSheet";

export default LocationSheet;
