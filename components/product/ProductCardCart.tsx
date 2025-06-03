import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppBadge from "../global/AppBadge";
import { AppText } from "../global/AppText";
import { AppView } from "../global/AppView";
import { IconButton } from "../ui/IconButton";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface ProductCardCartProps {
  productName: string;
  productType: string;
  weight: string;
  price: string;
  quantity: string | number;
  imageUrl: string;
  onPress?: () => void;
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppText type="pageTitle">{price}</AppText>
            <View style={[styles.alignEnd, { gap: 5 }]}>
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
          </View>

          <View style={[styles.bottomRow, { alignItems: "flex-end" }]}>
            <View>
              <IconButton
                compact
                variant="outline"
                icon={(color) => (
                  <MingCuteIcon name="delete_2_fill" size={20} color={color} />
                )}
              />
            </View>
            <View>
              <AppText type="secondary" style={styles.label}>
                الكمية
              </AppText>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <IconButton
                  compact
                  variant="primary"
                  icon={(color) => (
                    <MingCuteIcon
                      name="minimize_fill"
                      size={20}
                      color={color}
                    />
                  )}
                />
                <AppText type="pageTitle">{quantity}</AppText>
                <IconButton
                  compact
                  variant="secondary"
                  icon={(color) => (
                    <MingCuteIcon name="add_fill" size={20} color={color} />
                  )}
                />
              </View>
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
    paddingVertical: 20,
  },
  textContainer: {
    flex: 1,
    gap: 10,
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
    height: "100%",
    width: 125,
    borderRadius: 12,
  },
});

export default ProductCardCart;
