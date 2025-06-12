import { AppText } from "@/components/global/AppText";
import MingCuteIcon, {
  MingCuteIconName,
} from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import RNBounceable from "@freakycoder/react-native-bounceable";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type FilterCardProps = {
  filter: {
    name: string;
    icon: MingCuteIconName;
  };
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
};

const FilterCard: React.FC<FilterCardProps> = ({
  filter,
  onPress,
  style,
  iconSize = 16,
}) => {
  const { theme } = useColorScheme();

  return (
    <View style={style}>
      <RNBounceable bounceEffectIn={0.8} onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            backgroundColor: Colors[theme].secondary.default,
            alignSelf: "baseline",
            borderRadius: 6,
            marginRight: 12,
            gap: 6,
          }}
        >
          <MingCuteIcon
            name="down_fill"
            color={Colors[theme].primary[950]}
            size={iconSize}
          />
          <AppText>{filter.name}</AppText>
          <MingCuteIcon
            name={filter.icon}
            size={iconSize + 2}
            color={Colors[theme].primary[950]}
          />
        </View>
      </RNBounceable>
    </View>
  );
};

export default FilterCard;
