// components/AppSheetHeader.tsx
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import { IconButton } from "../ui/IconButton";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";
import { AppText } from "./AppText"; // Adjust import as needed

interface AppSheetHeaderProps {
  title: string;
  back?: boolean;
}

const AppSheetHeader: React.FC<AppSheetHeaderProps> = ({
  title,
  back = true,
}) => {
  const { dismiss } = useBottomSheetModal();
  const { theme } = useColorScheme();
  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: Colors[theme].secondary.default,
          borderBottomWidth: 1,
        },
      ]}
    >
      <Image
        source={require("@/assets/images/Pattern.svg")}
        contentFit="cover"
        contentPosition="center"
        style={{
          position: "absolute",
          width: "100%",
          opacity: 0.35,
          height: 220,
          zIndex: -1,
        }}
        cachePolicy={"memory-disk"}
      />
      {back ? (
        <IconButton
          rounded={false}
          icon={(color) => (
            <MingCuteIcon name="left_line" size={24} color={color} />
          )}
          onPress={() => dismiss()}
        />
      ) : (
        <View />
      )}

      <AppText type="pageTitle">{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AppSheetHeader;
