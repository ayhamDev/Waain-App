import AppBadge from "@/components/global/AppBadge";
import AppCard from "@/components/global/AppCard";
import { AppSeperator } from "@/components/global/AppSeperator";
import AppSheetHeader from "@/components/global/AppSheetHeader";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { AppButton } from "@/components/ui/Button";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useRef } from "react";
import { StyleSheet, View } from "react-native";
import AppSheet from "../AppSheet";
import AppSheetWrapper from "../AppSheetWrapper";
import LocationSheet from "../location";

const CartSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const { theme } = useColorScheme();
  const LocationSheetRef = useRef<BottomSheetModal>(null);

  return (
    <AppSheet ref={ref}>
      <AppSheetWrapper>
        <BottomSheetView style={styles.contentContainer}>
          <AppSheetHeader title="اختر طريقة التسوق" />
          <AppView style={{ padding: 20, width: "100%" }}>
            <View style={{ gap: 24 }}>
              <View style={{ gap: 16 }}>
                <AppButton
                  title="توصيل"
                  variant="primary"
                  disabled={true}
                  startComponent={(color) => (
                    <MingCuteIcon name="car_3_line" size={20} color={color} />
                  )}
                />
                <AppButton
                  title="ساتسوق بنفسي"
                  variant="secondary"
                  startComponent={(color) => (
                    <MingCuteIcon name="road_fill" size={20} color={color} />
                  )}
                />
              </View>
              <View
                style={{
                  gap: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AppButton
                    title="حدد الموقع"
                    startComponent={(icon) => (
                      <MingCuteIcon
                        name="location_fill"
                        size={20}
                        color={icon}
                      />
                    )}
                    onPress={() => {
                      LocationSheetRef.current?.present();
                    }}
                  />
                  <AppText type="pageTitle">الموقع المختار</AppText>
                </View>
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
                        style={{ textAlign: "right" }}
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
              </View>
              <View style={{ gap: 16 }}>
                <AppText type="pageTitle" style={{ textAlign: "right" }}>
                  تفاصيل السعر
                </AppText>
                <View style={{ gap: 12 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <AppText>35</AppText>
                    <AppText>سعر المنتجات</AppText>
                  </View>
                  <AppSeperator />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <AppBadge variant="primary">
                      <AppText type="defaultBold">35</AppText>
                    </AppBadge>
                    <AppText
                      type="defaultBold"
                      style={{ fontFamily: "Cairo-Bold" }}
                    >
                      سعر المنتجات
                    </AppText>
                  </View>
                </View>
              </View>
              <AppButton title="متابعة" variant="secondary" />
            </View>
          </AppView>
          <LocationSheet ref={LocationSheetRef} />
        </BottomSheetView>
      </AppSheetWrapper>
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

CartSheet.displayName = "CartSheet";

export default CartSheet;
