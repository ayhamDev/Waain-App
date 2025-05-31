// components/global/ProductCard.tsx

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import AppBadge from "../global/AppBadge";
import AppCard from "../global/AppCard";
import { AppText } from "../global/AppText";

export interface ProductCardProps {
  /** Image URI (e.g. https://placehold.co/500x500) */
  imageUri: string;

  /** First line of text (e.g. product name) */
  title: string;

  /** Second line of text (e.g. weight, subtitle) */
  subtitle?: string;

  /** If provided, this text will appear inside a badge in the bottom-right */
  badgeText?: string;

  /**
   * Optional style overrides for the outermost container.
   * You can pass { marginRight: 12 } or similar if you need spacing.
   */
  style?: ViewStyle;

  /**
   * Called when the user taps on the card.
   * If you omit this, the card is not pressable.
   */
  onPress?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUri,
  title,
  subtitle,
  badgeText,
  style,
  onPress,
}) => {
  const { theme } = useColorScheme();

  // If onPress is provided, wrap with Bounceable. Otherwise, render just a View.
  const Container: React.ComponentType<any> = onPress ? RNBounceable : View;
  const containerProps = onPress ? { onPress } : {};

  return (
    <Container {...containerProps} style={[styles.wrapper, style]}>
      <AppCard style={styles.card}>
        {/* IMAGE */}
        <Image
          source={{ uri: imageUri }}
          style={[
            styles.image,
            { backgroundColor: Colors[theme].secondary.default },
          ]}
          contentFit="cover"
          contentPosition={"center"}
        />

        {/* TEXT + BADGE */}
        <View style={styles.textContainer}>
          <AppText style={styles.title} type="default">
            {title}
          </AppText>
          {subtitle ? (
            <AppText style={styles.subtitle} type="secondary">
              {subtitle}
            </AppText>
          ) : null}

          {badgeText ? (
            <AppBadge variant="primary" style={styles.badge}>
              <AppText type="default">{badgeText}</AppText>
            </AppBadge>
          ) : null}
        </View>
      </AppCard>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    width: 150,
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  title: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  subtitle: {
    textAlign: "right",
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  badge: {
    marginLeft: "auto",
    marginTop: 10,
  },
});
