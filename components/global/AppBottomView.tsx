// AppBottomView.tsx
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface AppBottomViewProps extends ViewProps {
  children: React.ReactNode;
}

const AppBottomView: React.FC<AppBottomViewProps> = ({
  children,
  style,
  ...rest
}) => {
  const { theme } = useColorScheme(); // should return "light" | "dark"

  return (
    <View style={[styles.container(Colors[theme]), style]} {...rest}>
      {children}
    </View>
  );
};

const styles = {
  container: (colors: any): ViewStyle => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: colors.background.default,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderColor: colors.secondary.default,
    borderWidth: 1,
  }),
};

export default AppBottomView;
