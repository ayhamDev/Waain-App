"use client";

import { AppText } from "@/components/AppText";
import AppScreen from "@/components/global/AppScreen";
import SettingsCard from "@/components/screens/profile/SettingsCard";
import UserCard from "@/components/screens/profile/UserCard";
import { AppButton } from "@/components/ui/Button";
import { MingCuteIconsMap } from "@/components/ui/MingCute/MingCuteIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const settingsOptions = useMemo(
    () =>
      [
        {
          title: "السوبرماركت المفضل",
          content: "بن داود",
          iconName: "shopping_cart_1_fill",
        },
        {
          title: "المفضلة",
          content: "12 منتجات",
          iconName: "heart_fill",
        },
        {
          title: "سجل المشتريات",
          content: "12 منتجات",
          iconName: "history_2_fill",
        },
        {
          title: "العناوين",
          content: "4 عناوين",
          iconName: "location_fill",
        },
        {
          title: "اللغة",
          content: "عربي",
          iconName: "translate_2_fill",
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
      }[],
    []
  );
  return (
    <AppScreen>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 10 }}>
          <AppText style={{ textAlign: "right" }} type="pageTitle">
            الملف الشخصي
          </AppText>
          <UserCard userName="Ali Nafa" phoneNumber="+966 000 000 000" />
          <AppButton
            title="تسجيل الخروج"
            variant="primary"
            onPress={() => {}}
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
              onPress={() => {
                // Add navigation or action here
                router.push("/profile/store");
                console.log(`Pressed: ${item.title}`);
              }}
            />
          ))}
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
