import AppBadge from "@/components/global/AppBadge";
import AppBottomView from "@/components/global/AppBottomView";
import AppScreen from "@/components/global/AppScreen";
import { AppSeperator } from "@/components/global/AppSeperator";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { AppButton } from "@/components/ui/Button";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

const HistoryDetailsScreen = () => {
  const { theme } = useColorScheme();
  return (
    <AppScreen title="تفاصيل المشتريات" stack={true} contentStyle={{ flex: 1 }}>
      <View style={{ gap: 20 }}>
        <Image
          style={{
            alignSelf: "flex-end",
            height: 100,
            width: 150,
            borderRadius: 12,
            backgroundColor: Colors[theme].secondary.default,
          }}
          contentFit="contain"
          contentPosition={"center"}
          source={{
            uri: "https://placehold.co/150x100/webp",
          }}
        />
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
        <AppSeperator />
        <TextInputField
          startComponent={({ color }) => (
            <MingCuteIcon size={22} name="search_line" color={color} />
          )}
          placeholder="Search..."
          style={{ flex: 1 }}
        />
      </View>
      <View>
        <AppView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <View style={{ flex: 1, gap: 5, marginBottom: 10 }}>
            <View style={{ alignSelf: "flex-end" }}>
              <AppBadge style={{ alignSelf: "flex-end" }} variant="primary">
                <AppText>نوع المنتج</AppText>
              </AppBadge>
              <AppText
                style={{ textAlign: "right" }}
                type="defaultBold"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                اسم المنتج
              </AppText>
              <AppText style={{ textAlign: "right" }} type="secondary">
                1 كيلو
              </AppText>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <AppText
                  type="secondary"
                  style={{ fontSize: 14, textAlign: "right" }}
                >
                  السعر
                </AppText>
                <AppText style={{ textAlign: "right" }} type="defaultBold">
                  14ريال
                </AppText>
              </View>
              <View>
                <AppText
                  type="secondary"
                  style={{ fontSize: 14, textAlign: "right" }}
                >
                  الكمية
                </AppText>
                <AppText style={{ textAlign: "right" }} type="defaultBold">
                  2
                </AppText>
              </View>
            </View>
          </View>
          <Image
            style={{
              alignSelf: "flex-start",
              height: 125,
              width: 125,
              borderRadius: 12,
              backgroundColor: Colors[theme].secondary.default,
            }}
            contentFit="contain"
            contentPosition={"center"}
            source={{
              uri: "https://placehold.co/125x125/webp",
            }}
          />
        </AppView>
        <AppSeperator />
      </View>
      <AppBottomView>
        <AppButton
          onPress={() => {}}
          variant="secondary"
          style={{}}
          title="أضف إلى السلة مرة اخرى"
        />
      </AppBottomView>
    </AppScreen>
  );
};

export default HistoryDetailsScreen;
