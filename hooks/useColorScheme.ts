// hooks/useColorScheme.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

const STORAGE_KEY = "APP_THEME"; // "light" | "dark" | "system"

export function useColorScheme() {
  const systemColorScheme = useSystemColorScheme();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        setTheme("light");
      }
    });
  }, [systemColorScheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    AsyncStorage.setItem(STORAGE_KEY, newTheme);
  };

  const setPreferredTheme = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    await AsyncStorage.setItem(STORAGE_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
    setPreferredTheme,
  };
}
