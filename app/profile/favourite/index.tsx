import AppBadge from "@/components/global/AppBadge";
import AppCard from "@/components/global/AppCard";
import AppScreen from "@/components/global/AppScreen";
import { AppText } from "@/components/global/AppText";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function FavouriteScreen() {
  const { theme } = useColorScheme();
  return (
    <AppScreen
      scroll={false}
      stack={true}
      title={"المفضلة"}
      contentStyle={{
        paddingHorizontal: 0,
        margin: 0,
      }}
    >
      <View style={{ gap: 0 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <TextInputField
            startComponent={({ color }) => (
              <MingCuteIcon size={22} name="search_line" color={color} />
            )}
            placeholder="Search..."
            style={{ flex: 1 }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
          }}
        >
          <FlatGrid
            itemDimension={130}
            spacing={15}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Array.from({ length: 100 }, (value, index) => index)}
            renderItem={({ item }) => (
              <RNBounceable>
                <AppCard
                  style={{
                    borderRadius: 12,
                    padding: 10,
                  }}
                >
                  <Image
                    style={{
                      minHeight: 120,
                      maxHeight: 200,
                      width: "100%",
                      borderRadius: 12,
                      marginBottom: 10,
                      backgroundColor: Colors[theme].secondary.default,
                    }}
                    contentFit="cover"
                    contentPosition={"center"}
                    source={{
                      uri: "https://placehold.co/500x500/webp",
                    }}
                  />
                  <View>
                    <AppText style={{ textAlign: "right" }} type="default">
                      تفاح طازج
                    </AppText>
                    <AppText style={{ textAlign: "right" }} type="secondary">
                      1 كيلو
                    </AppText>
                    <AppBadge
                      variant="primary"
                      style={{ marginLeft: "auto", marginTop: 10 }}
                    >
                      <AppText type="default">فواكة طازجة</AppText>
                    </AppBadge>
                  </View>
                </AppCard>
              </RNBounceable>
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
}
