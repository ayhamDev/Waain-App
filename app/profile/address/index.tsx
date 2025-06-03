import AppCard from "@/components/global/AppCard";
import AppScreen from "@/components/global/AppScreen";
import { AppText } from "@/components/global/AppText";
import { AppView } from "@/components/global/AppView";
import { AppButton } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import React from "react";
import { View } from "react-native";

export default function AddressScreen() {
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
  ];
  return (
    <AppScreen stack={true} title={"العناوين"}>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 10 }}>
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
          {addressDummyData.map((address) => (
            <AppCard key={address.addressName}>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <AppView>
                  <IconButton
                    rounded={false}
                    variant="primary"
                    icon={(color) => (
                      <MingCuteIcon
                        name="edit_2_fill"
                        size={20}
                        color={color}
                      />
                    )}
                  />
                </AppView>
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
        <AppButton
          onPress={() => console.log("Pressed 1")}
          title="عنوان جديد"
          startComponent={(color) => (
            <MingCuteIcon name="add_fill" color={color} size={20} />
          )}
        />
      </View>
    </AppScreen>
  );
}
