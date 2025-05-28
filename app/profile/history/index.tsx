import AppCard from "@/components/global/AppCard";
import AppScreen from "@/components/global/AppScreen";
import { AppText } from "@/components/global/AppText";
import { AppButton } from "@/components/ui/Button";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function HistoryScreen() {
  const { theme } = useColorScheme();
  const router = useRouter();
  return (
    <AppScreen stack={true} title={"سجل المشتريات"}>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 10 }}>
          <AppCard
            variant="secondary"
            style={{ flexDirection: "column", gap: 20 }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View>
                <AppText style={{ textAlign: "right" }} type="secondary">
                  نوع الطلب
                </AppText>
                <AppText
                  style={{
                    textAlign: "right",
                    borderBottomColor: Colors[theme].primary[950],
                    color: Colors[theme].primary[800],
                    lineHeight: 25,
                    borderBottomWidth: 1,
                  }}
                  type="defaultBold"
                >
                  تسوق مباشر
                </AppText>
              </View>
              <View>
                <AppText style={{ textAlign: "right" }} type="secondary">
                  سعر الطلب
                </AppText>
                <AppText style={{ textAlign: "right" }} type="defaultBold">
                  550 ريال
                </AppText>
              </View>
              <View>
                <AppText style={{ textAlign: "right" }} type="secondary">
                  تاريخ الطلب
                </AppText>
                <AppText style={{ textAlign: "right" }} type="defaultBold">
                  2025/12/05
                </AppText>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                // backgroundColor: "blue",
              }}
            >
              <AppButton
                variant="secondary"
                title="التفاصيل"
                onPress={() => router.push("/profile/history/details/2")}
              />
              <Image
                style={{
                  minHeight: 70,
                  width: 120,
                  borderRadius: 12,
                  backgroundColor: Colors[theme].secondary.default,
                }}
                contentFit="contain"
                contentPosition={"center"}
                source={{
                  uri: "https://placehold.co/400x500/webp",
                }}
              />
            </View>
          </AppCard>
        </View>
      </View>
    </AppScreen>
  );
}
