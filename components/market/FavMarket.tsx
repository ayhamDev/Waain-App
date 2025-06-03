import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppCard from "../global/AppCard";
import { AppText } from "../global/AppText";
// assuming you're using a theme hook

type FavMarketProps = {
  number: string | number;
  imageUri: string;
  selected?: boolean;
};

const FavMarket: React.FC<FavMarketProps> = ({
  number,
  imageUri,
  selected = false,
}) => {
  const { theme } = useColorScheme(); // assumes theme is 'light' | 'dark'

  return (
    <AppCard selected={selected} style={styles.card}>
      <View style={styles.textContainer}>
        <AppText type="pageTitle">{number}</AppText>
        <AppText type="secondary">عدد الفروع</AppText>
      </View>
      <Image
        style={[
          styles.image,
          { backgroundColor: Colors[theme].secondary.default },
        ]}
        contentFit="cover"
        contentPosition="center"
        source={{ uri: imageUri }}
      />
    </AppCard>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  image: {
    height: "100%",
    width: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
});

export default FavMarket;
