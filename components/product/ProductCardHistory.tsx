import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppBadge from "../global/AppBadge";
import { AppText } from "../global/AppText";
import { AppView } from "../global/AppView";

interface ProductCardHistoryProps {
  productName: string;
  productType: string;
  weight: string;
  price: string;
  quantity: string | number;
  imageUrl: string;
  onPress?: () => void;
}

const ProductCardHistory: React.FC<ProductCardHistoryProps> = ({
  productName,
  productType,
  weight,
  price,
  quantity,
  imageUrl,
  onPress,
}) => {
  const { theme } = useColorScheme();

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <AppView style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.alignEnd}>
            <AppBadge style={styles.alignEnd} variant="primary">
              <AppText>{productType}</AppText>
            </AppBadge>
            <AppText
              style={styles.textRight}
              type="defaultBold"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {productName}
            </AppText>
            <AppText style={styles.textRight} type="secondary">
              {weight}
            </AppText>
          </View>
          <View style={styles.bottomRow}>
            <View>
              <AppText type="secondary" style={styles.label}>
                السعر
              </AppText>
              <AppText style={styles.textRight} type="defaultBold">
                {price}
              </AppText>
            </View>
            <View>
              <AppText type="secondary" style={styles.label}>
                الكمية
              </AppText>
              <AppText style={styles.textRight} type="defaultBold">
                {quantity}
              </AppText>
            </View>
          </View>
        </View>
        <Image
          style={[
            styles.image,
            { backgroundColor: Colors[theme].secondary.default },
          ]}
          source={{ uri: imageUrl }}
        />
      </AppView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  textContainer: {
    flex: 1,
    gap: 5,
    marginBottom: 10,
  },
  alignEnd: {
    alignSelf: "flex-end",
  },
  textRight: {
    textAlign: "right",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    textAlign: "right",
  },
  image: {
    alignSelf: "flex-start",
    height: 125,
    width: 125,
    borderRadius: 12,
  },
});

export default ProductCardHistory;
