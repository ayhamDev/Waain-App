import { AppText } from "@/components/AppText";
import AppCard from "@/components/global/AppCard";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface SettingsCardProps {
  variant?: "primary" | "secondary";
  label: string;
  value: string;
  IconName?: string;
  onPress?: () => void;
}

const SettingsCard: React.FC<SettingsCardProps> = ({
  variant = "primary",
  label,
  value,
  IconName = "shopping_cart_1_fill",
  onPress,
}) => {
  const { theme } = useColorScheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <AppCard variant={variant}>
        <View style={[styles.container]}>
          <MingCuteIcon
            name={"left_fill"}
            size={24}
            color={Colors[theme].primary[400]}
          />
          <View style={styles.rightContainer}>
            <View>
              <AppText style={styles.textRight} type="defaultBold">
                {label}
              </AppText>
              <AppText type="secondary" style={styles.textRight}>
                {value}
              </AppText>
            </View>
            <MingCuteIcon
              name={IconName as any}
              size={24}
              color={Colors[theme].primary[400]}
            />
          </View>
        </View>
      </AppCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textRight: {
    textAlign: "right",
  },
});

export default SettingsCard;
