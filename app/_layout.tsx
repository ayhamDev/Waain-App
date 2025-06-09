import { Colors } from "@/constants/Styles";
import { AppSheetProvider } from "@/context/AppSheet.context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 500,
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
  if (!loaded || (loaded && error)) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: Colors[theme].background.default }}
        >
          <AppSheetProvider>
            <StatusBar style="auto" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: Colors[theme].background.default,
                  flex: 1,
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
          </AppSheetProvider>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
