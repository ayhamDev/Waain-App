import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { AppText } from "@/components/AppText";
import { AppView } from "@/components/AppView";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function CartScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <AppView style={styles.titleContainer}>
        <AppText type="title">cart!</AppText>
        <HelloWave />
      </AppView>
      <AppView style={styles.stepContainer}>
        <AppText type="subtitle">Step 1: Try it</AppText>
        <AppText>
          Edit <AppText type="defaultSemiBold">app/(tabs)/index.tsx</AppText> to
          see changes. Press{" "}
          <AppText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </AppText>{" "}
          to open developer tools.
        </AppText>
      </AppView>
      <AppView style={styles.stepContainer}>
        <AppText type="subtitle">Step 2: Explore</AppText>
        <AppText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </AppText>
      </AppView>
      <AppView style={styles.stepContainer}>
        <AppText type="subtitle">Step 3: Get a fresh start</AppText>
        <AppText>
          {`When you're ready, run `}
          <AppText type="defaultSemiBold">npm run reset-project</AppText> to get
          a fresh <AppText type="defaultSemiBold">app</AppText> directory. This
          will move the current <AppText type="defaultSemiBold">app</AppText> to{" "}
          <AppText type="defaultSemiBold">app-example</AppText>.
        </AppText>
      </AppView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
