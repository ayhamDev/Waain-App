import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  const { theme } = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors[theme].background.default,
          },
        }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
