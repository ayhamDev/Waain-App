import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { IconButton } from "../ui/IconButton";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface AppHeaderProps {
  stack?: boolean;
}

const AppHeader = ({ stack = false }: AppHeaderProps) => {
  const router = useRouter();
  const { theme } = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: Colors[theme].secondary.default,
          borderBottomWidth: 0.75,
        },
        { paddingTop: (StatusBar.currentHeight || 35) + 8 },
      ]}
    >
      {stack ? (
        <IconButton
          rounded={false}
          icon={(color) => (
            <MingCuteIcon name="left_line" size={24} color={color} />
          )}
          onPress={() => router.back()}
        />
      ) : (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <IconButton
            onPress={() => console.log("Clicked")}
            icon={(color) => (
              <MingCuteIcon name="location_fill" size={24} color={color} />
            )}
            rounded={false}
          />
          <IconButton
            onPress={() => router.push("/notification")}
            icon={(color) => (
              <MingCuteIcon name="notification_fill" size={24} color={color} />
            )}
            rounded={false}
          />
        </View>
      )}
      <Image
        source={require("@/assets/images/Logo.svg")}
        style={{ width: 113, height: 44 }}
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    boxSizing: "content-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    zIndex: 10,
  },
});

export default AppHeader;
