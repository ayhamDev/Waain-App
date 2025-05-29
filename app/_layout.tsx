import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const { theme } = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    MingCute: require("@/assets/fonts/MingCute.ttf"),
    "Cairo-Light": require("@/assets/fonts/Cairo-Light.ttf"),
    "Cairo-Regular": require("@/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-Medium": require("@/assets/fonts/Cairo-Medium.ttf"),
    "Cairo-Bold": require("@/assets/fonts/Cairo-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }
  }, [loaded, error]);

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors[theme].background.default,
          },
        }}
      >
        {/* main */}
        <Stack.Screen name="(tabs)" />
        {/* screens stacks */}
        <Stack.Screen name="profile" />
        <Stack.Screen name="notification/index" />

        {/* auth */}
        <Stack.Screen name="auth" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
