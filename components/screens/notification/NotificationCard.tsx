import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import AppCard from "@/components/global/AppCard";
import { Image } from "expo-image";
import React from "react";
import { I18nManager, StyleSheet, TouchableOpacity } from "react-native";

export interface NotificationCardProps {
  variant?: "primary" | "secondary";
  title: string;
  subTitle: string;
  value: string;
  imageSource?: string;
  onPress?: () => void;
  rtl?: boolean;
}

const NotificationCard = ({
  title,
  subTitle,
  value,
  imageSource,
  onPress,
  variant = "secondary",
  rtl = I18nManager.isRTL,
}: NotificationCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <AppCard variant={variant}>
        <AppView
          style={[styles.container, rtl && { flexDirection: "row-reverse" }]}
        >
          {imageSource && (
            <Image
              source={{ uri: imageSource }}
              style={[
                styles.image,
                rtl ? { marginRight: 0, marginLeft: 12 } : {},
              ]}
              contentFit="cover"
              contentPosition={"center"}
              cachePolicy={"memory-disk"}
            />
          )}
          <AppView style={styles.textWrapper}>
            <AppText
              type="defaultBold"
              style={[styles.title, rtl && styles.textRight]}
            >
              {title}
            </AppText>
            <AppText
              type="secondary"
              style={[styles.subTitle, rtl && styles.textRight]}
            >
              {subTitle}
            </AppText>
          </AppView>
          <AppText
            type="secondary"
            style={[
              styles.value,
              rtl ? { marginLeft: 0, marginRight: 12, textAlign: "right" } : {},
            ]}
          >
            {value}
          </AppText>
        </AppView>
      </AppCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 8,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  subTitle: {},
  value: {
    marginLeft: 12,
  },
  textRight: {
    textAlign: "right",
  },
});

export default NotificationCard;
