"use client";

import AppScreen from "@/components/global/AppScreen";
import { AppText } from "@/components/global/AppText";
import SettingsCard from "@/components/screens/profile/SettingsCard";
import UserCard from "@/components/screens/profile/UserCard";
import LanguageSheet from "@/components/sheets/Language";
import { AppButton } from "@/components/ui/Button";
import { MingCuteIconsMap } from "@/components/ui/MingCute/MingCuteIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useMemo, useRef } from "react";
import { View } from "react-native";
export default function ProfileScreen() {
  const sheetRef = useRef<BottomSheetModal>(null);
  const settingsOptions = useMemo(
    () =>
      [
        {
          title: "السوبرماركت المفضل",
          content: "بن داود",
          iconName: "shopping_cart_1_fill",
          onPress: () => router.push("/profile/store"),
        },
        {
          title: "المفضلة",
          content: "12 منتجات",
          iconName: "heart_fill",
          onPress: () => router.push("/profile/favourite"),
        },
        {
          title: "سجل المشتريات",
          content: "12 منتجات",
          iconName: "history_2_fill",
          onPress: () => router.push("/profile/history"),
        },
        {
          title: "العناوين",
          content: "4 عناوين",
          iconName: "location_fill",
          onPress: () => router.push("/profile/address"),
        },
        {
          title: "اللغة",
          content: "عربي",
          iconName: "translate_2_fill",
          onPress: () => sheetRef.current?.present(),
        },
        {
          title: "رفع بلاغ",
          content: "0 بلاغات تحت المراجعة",
          iconName: "alert_diamond_fill",
        },
      ] as {
        title: string;
        content: string;
        iconName: keyof typeof MingCuteIconsMap;
        onPress: () => void;
      }[],
    []
  );

  return (
    <>
      <AppScreen>
        <View style={{ gap: 24 }}>
          <View style={{ gap: 10 }}>
            <AppText style={{ textAlign: "right" }} type="heading">
              الملف الشخصي
            </AppText>
          </View>
          <View style={{ gap: 10 }}>
            <UserCard userName="Ali Nafa" phoneNumber="+966 000 000 000" />
            <AppButton
              title="تسجيل الخروج"
              variant="secondary"
              onPress={() => router.replace("/auth/login")}
              startComponent={(color) => (
                <MaterialCommunityIcons name="logout" size={24} color={color} />
              )}
            />
          </View>

          <View style={{ gap: 12 }}>
            {settingsOptions.map((item, index) => (
              <SettingsCard
                key={index}
                variant="primary"
                label={item.title}
                value={item.content}
                IconName={item.iconName}
                onPress={item?.onPress}
              />
            ))}
          </View>
        </View>
        {/* Sheets */}
      </AppScreen>
      <LanguageSheet ref={sheetRef} />
    </>
  );
}
